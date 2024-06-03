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
import { IDevice } from '@hub-center/hub-model';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MoveDeviceComponent } from '../moveDevice/move-device.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';

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
  runningDateRange?: string;
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
    NzTagModule,
  ],
})
export class PresentationDetailComponent implements OnInit {
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  deviceId = '';
  detailId = '';
  regionId = '';

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  deviceInfo?: IDevice;

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  actions: CalendarEventAction[] = [
    {
      label: 'Delete',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        const data = {
          deviceId: this.deviceId,
          scheduleId: [
            event.id
          ]
        }
        this.loadingService.showLoading();

        this.apiUserService.removeSchedule(data)
          .pipe(
            tap((res: any) => {
              if (res.result.ok === true) {
                this.notification.success('Thông báo','Xoá lịch trình chiếu thành công!!!')
                window.location.reload();
              }
            }),
            catchError((err) => {
              this.loadingService.hideLoading();
              this.notification.error('Lỗi', err?.error?.result?.message ?? 'Xoá lịch trình chiếu thất bại!!!')
              return throwError(err?.error?.result?.message);
            }),
            finalize(() => {
              this.loadingService.hideLoading();
            })
          )
          .subscribe();
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
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe().subscribe((param) => {
      if (param['deviceId']) {
        this.deviceId = param['deviceId'];
        this.regionId = param['regionId'];
        this.detailId = param['detailId'];
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
              const activeDates = scheduleInfo.activeDate
                ? scheduleInfo.activeDate.split(',')
                : [];
              const runningDates = scheduleInfo.runningDateRange
                ? scheduleInfo.runningDateRange
                    .split('-')
                    .map(
                      (date) => new Date(date.split('/').reverse().join('-'))
                    )
                : null;

              if (runningDates && runningDates.length === 2) {
                const [startRunningDate, endRunningDate] = runningDates;

                for (
                  let date = new Date(startRunningDate);
                  date <= endRunningDate;
                  date.setDate(date.getDate() + 1)
                ) {
                  const day = date.getDate();
                  const month = date.getMonth() + 1; // Months are zero-based
                  const year = date.getFullYear();

                  if (scheduleInfo.runTimeType === 'FULL_DAY') {
                    // Add event for the whole day
                    const start = new Date(year, month - 1, day, 0, 0);
                    const end = new Date(year, month - 1, day, 23, 59);

                    this.events.push({
                      start,
                      end,
                      title: `(${this.formatTime(start)} - ${this.formatTime(
                        end
                      )}) ${scheduleInfo.name}`,
                      allDay: true,
                      id: scheduleInfo.id
                    });
                  } else {
                    // Add events according to listTimes
                    listTimes?.forEach((time) => {
                      const [fromHour, fromMinute] = time.fromTime
                        .split(':')
                        .map(Number);
                      const [toHour, toMinute] = time.toTime
                        .split(':')
                        .map(Number);

                      const start = new Date(
                        year,
                        month - 1,
                        day,
                        fromHour,
                        fromMinute
                      );
                      const end = new Date(
                        year,
                        month - 1,
                        day,
                        toHour,
                        toMinute
                      );

                      this.events.push({
                        start,
                        end,
                        title: `(${this.formatTime(start)} - ${this.formatTime(
                          end
                        )}) ${scheduleInfo.name}`,
                        allDay: false,
                        id: scheduleInfo.id
                      });
                    });
                  }
                }
              } else {
                activeDates.forEach((date) => {
                  const [day, month, year] = date.split('/').map(Number);

                  if (scheduleInfo.runTimeType === 'FULL_DAY') {
                    // Thêm sự kiện cho cả ngày
                    const start = new Date(year, month - 1, day, 0, 0);
                    const end = new Date(year, month - 1, day, 23, 59);

                    this.events.push({
                      start,
                      end,
                      title: `(${this.formatTime(start)} - ${this.formatTime(
                        end
                      )}) ${scheduleInfo.name}`,
                      allDay: true,
                      actions: this.actions,
                      id: scheduleInfo.id
                    });
                  } else {
                    // Thêm sự kiện theo listTimes
                    listTimes?.forEach((time) => {
                      const [fromHour, fromMinute] = time.fromTime
                        .split(':')
                        .map(Number);
                      const [toHour, toMinute] = time.toTime
                        .split(':')
                        .map(Number);

                      const start = new Date(
                        year,
                        month - 1,
                        day,
                        fromHour,
                        fromMinute
                      );
                      const end = new Date(
                        year,
                        month - 1,
                        day,
                        toHour,
                        toMinute
                      );

                      this.events.push({
                        start,
                        end,
                        title: `(${this.formatTime(start)} - ${this.formatTime(
                          end
                        )}) ${scheduleInfo.name}`,
                        allDay: false,
                        actions: this.actions,
                        id: scheduleInfo.id
                      });
                    });
                  }
                  this.refresh.next();
                });
              }
              this.refresh.next();
            });
          }
        }),
        catchError((err) => {
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

  getInfoDevice(detailId: string) {
    this.loadingService.showLoading();
    this.apiUserService
      .getInfoDevice(detailId)
      .pipe(
        tap((res: any) => {
          if (res.result.ok === true && res.data) {
            console.log(res);
            this.deviceInfo = res.data;
          }
        }),
        catchError((err) => {
          this.loadingService.hideLoading();
          return throwError(err?.error?.result?.message);
        }),
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  onShowModalAddPresentation() {
    const modal = this.modal.create({
      nzTitle: 'Chọn lịch trình chiếu',
      nzContent: AddPresentationModalComponent,
      nzData: { regionId: this.regionId, deviceId: this.deviceId },
      nzClosable: false,
      nzFooter: null,
    });

    modal.afterClose.subscribe((result) => {
      if (result === 'success') {
        // this.getScheduleDetail(this.deviceId);
        // this.refresh.next();
        // this.getScheduleDetail(this.deviceId);
        window.location.reload();
      }
    });
  }
}
