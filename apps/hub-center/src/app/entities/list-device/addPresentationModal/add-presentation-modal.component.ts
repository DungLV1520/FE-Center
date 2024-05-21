import { Component, Inject, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import {
  NZ_MODAL_DATA,
  NzModalModule,
  NzModalRef,
  NzModalService,
} from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { LoadingService } from '@hub-center/loading';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { addDays, startOfDay, subDays } from 'date-fns';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  standalone: true,
  selector: 'adv-add-presentation-modal',
  templateUrl: './add-presentation-modal.component.html',
  imports: [
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzSelectModule,
    NzRadioModule,
    NzDatePickerModule,
    NgIf,
    NzModalModule,
    NzButtonModule,
    NgForOf,
    TuiCalendarModule,
    NzSpinModule,
    MatTooltipModule,
    NzToolTipModule,
  ],
  providers: [DatePipe],
  styleUrls: ['./add-presentation-modal.component.scss'],
})
export class AddPresentationModalComponent implements OnInit {
  readonly searchForm = new FormControl();
  radioValue: 'day' | 'custom' = 'day';
  date = null;
  options = [];
  minDate: TuiDay = TuiDay.currentLocal();
  maxDate: TuiDay = TuiDay.currentLocal().append({ day: 90 });
  regionId = '';
  deviceId = '';
  listSchedule: any;
  listOfSelectedSchedule = [];
  isLoading = false;

  formattedDates: string[] = [];
  selectedMultiDate: TuiDay[] = [];
  form: FormGroup;

  disabledDate = (current: Date): boolean => {
    const minDate = startOfDay(new Date());
    const maxDate = addDays(minDate, 90);

    return startOfDay(current) < minDate || startOfDay(current) > maxDate;
  };

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    @Inject(NZ_MODAL_DATA) public data: NzModalRef,
    private apiService: ApiUserService,
    private loadingService: LoadingService,
    private notification: NzNotificationService,
    private modalRef: NzModalRef,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      multiSelect: [[]],
    });
  }

  ngOnInit() {
    this.regionId = (this.data as any).regionId!;
    this.deviceId = (this.data as any).deviceId!;
    this.getAllSchedule();
    // console.log(this.regionId)
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onDayClick(day: TuiDay) {
    this.selectedMultiDate = this.selectedMultiDate.find((item) =>
      item.daySame(day)
    )
      ? this.selectedMultiDate.filter((item) => !item.daySame(day))
      : this.selectedMultiDate.concat(day);
  }

  formatDates(): void {
    this.formattedDates = this.selectedMultiDate.map((date) => {
      const jsDate = date.toLocalNativeDate(); // Convert TuiDay to JavaScript Date
      const day = jsDate.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
      const month = (jsDate.getMonth() + 1).toString().padStart(2, '0'); // Get month and pad with zero if needed
      const year = jsDate.getFullYear(); // Get full year
      return `${day}/${month}/${year}`;
    });
  }

  getAllSchedule() {
    this.apiService
      .getListPresentationSlide({ size: 1000, page: 0 })
      .pipe(
        tap((res: any) => {
          if (res.result.ok === true) {
            this.listSchedule = res.data.content;
          }
        }),
        catchError((err) => {
          console.log(err);
          this.loadingService.hideLoading();
          return throwError(err?.error?.result?.message);
        }),
        finalize(() => {
          // this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  addPresentation() {
    this.isLoading = true;
    this.formatDates();
    const result = {
      deviceId: this.deviceId,
      scheduleId: this.listOfSelectedSchedule,
      activeDates:
        this.radioValue === 'day'
          ? [this.datePipe.transform(this.date, 'dd/MM/yyyy')]
          : this.formattedDates,
    };

    this.apiService
      .applyScheduleToDevice(result)
      .pipe(
        tap((result: any) => {
          if (result.result.ok) {
            this.modalRef.close('success');
            this.notification.blank(
              'Thông báo',
              'Thêm lịch trình chiếu thành công'
            );
          } else {
            this.notification.blank(
              'Thông báo',
              result.result.message ?? 'Thêm lịch trình chiếu thất bại'
            );
          }
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe();
  }

  closeModal() {
    this.modalRef.close();
  }

  onViewDetailPresentation(scheduleId: string, name: string, event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const fakeLink = document.createElement('a');
    const url = `${window.location.origin}/adv/create-presentation-slide?scheduleId=${scheduleId}&name=${name}&type=edit`;
    // const a = http://localhost:4200/adv/create-presentation-slide?scheduleId=f62cb70f-acbc-4b12-b9f6-9d5d2c12181f&name=Test3&type=edit
    fakeLink.href = url;
    fakeLink.target = '_blank';
    fakeLink.click();
  }
}
