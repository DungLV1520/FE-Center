import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HubFeatureLoadingModule, LoadingService } from '@hub-center/loading';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarModule,
  CalendarView,
} from 'angular-calendar';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import {
  addHours,
  isSameDay,
  isSameMonth,
  endOfMonth,
  subDays,
  startOfDay,
  addDays,
} from 'date-fns';
import { catchError, finalize, Subject, tap, throwError } from 'rxjs';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { AddPresentationModalComponent } from '../addPresentationModal/add-presentation-modal.component';
import { EventColor } from 'calendar-utils';

export interface Daum {
  scheduleInfo: ScheduleInfo;
  listDocuments: ListDocument[];
  listTimes: ListTime[];
}

export interface ScheduleInfo {
  id: string;
  name: string;
  createdBy: string;
  deviceId: string;
  runTimeType: string;
  orderType: string;
  activeDate: string;
  timeToTransfer: number;
  insDatetime: string;
  updDatetime: string;
  isDeleted: boolean;
}

export interface ListDocument {
  id: string;
  documentId: string;
  scheduleId: string;
  duration: number;
  loopNumber: number;
  insDatetime: string;
  path: string;
}

export interface ListTime {
  id: string;
  scheduleId: string;
  fromTime: string;
  toTime: string;
  insDatetime: string;
  updDatetime: string;
  isDeleted: boolean;
}

@Component({
  selector: 'adv-presentation-detail',
  standalone: true,
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss'],
  imports: [
    HubFeatureLoadingModule,
    NzTabsModule,
    NzButtonModule,
    CalendarModule,
    NzSelectModule,
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NzModalModule,
  ],
})
export class PresentationDetailComponent implements OnInit {
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  deviceId = '';
  regionId = '';

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  constructor(
    private route: ActivatedRoute,
    private apiUserService: ApiUserService,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe().subscribe((param) => {
      if (param['deviceId']) {
        this.deviceId = param['deviceId'];
        this.regionId = param['regionId'];
        this.getScheduleDetail(this.deviceId);
      }
    });
  }

  formatTime = (date: Date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  getScheduleDetail(deviceId: string) {
    this.loadingService.showLoading();
    this.apiUserService
      .getScheduleDetail(deviceId)
      .pipe(
        tap((res: any) => {
          if (res.result.ok === true && res.data.length > 0) {
            (res.data as Daum[]).forEach((eventData) => {
              const { scheduleInfo, listTimes } = eventData;
              const activeDates = scheduleInfo.activeDate.split(',');

              activeDates.forEach((date) => {
                listTimes?.forEach((time) => {
                  const [day, month, year] = date.split('/').map(Number);
                  const [fromHour, fromMinute] = time.fromTime
                    .split(':')
                    .map(Number);
                  const [toHour, toMinute] = time.toTime.split(':').map(Number);

                  const start = new Date(
                    year,
                    month - 1,
                    day,
                    fromHour,
                    fromMinute
                  );
                  const end = new Date(year, month - 1, day, toHour, toMinute);

                  const formattedStartTime = this.formatTime(start);
                  const formattedEndTime = this.formatTime(end);

                  this.events.push({
                    start,
                    end,
                    title: `(${formattedStartTime} - ${formattedEndTime}) ${scheduleInfo.name}`,
                    allDay: scheduleInfo.runTimeType === 'FULL_DAY',
                  });
                });
              });
              this.refresh.next();
            });
          }
        }),
        catchError((err) => {
          console.log(err);
          this.loadingService.hideLoading();
          return throwError(err?.error?.result?.message);
        }),
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  onModeChange(mode: string) {
    if (mode === 'month') {
      this.setView(CalendarView.Month);
    } else if (mode === 'week') {
      this.setView(CalendarView.Week);
    } else if (mode === 'day') {
      this.setView(CalendarView.Day);
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getInfoDevice(deviceId: string) {
    this.apiUserService.getInfoDevice(deviceId).subscribe();
  }

  onShowModalAddPresentation() {
    const modal = this.modalService.create({
      nzTitle: 'Chọn lịch trình chiếu',
      nzContent: AddPresentationModalComponent,
      nzData: { regionId: this.regionId, deviceId: this.deviceId },
      nzClosable: false,
      nzFooter: null,
    });

    modal.afterClose.subscribe((result) => {
      if (result === 'success') {
        this.getScheduleDetail(this.deviceId);
        this.refresh.next();
        // window.location.reload();
      }
    });
  }
}
