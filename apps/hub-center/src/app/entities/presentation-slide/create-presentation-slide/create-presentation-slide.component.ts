import { Component, Inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { HubFeatureLoadingModule, LoadingService } from '@hub-center/loading';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
} from '@taiga-ui/core';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  TuiInputModule,
  TuiInputNumberModule,
  TuiRadioLabeledModule,
  TuiStepperModule,
} from '@taiga-ui/kit';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TruncatePipe } from './truncate.pipe';
import { DndDropEvent, DndModule, DropEffect } from 'ngx-drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

enum RUN_TIME_TYPE {
  FULL_DAY = 'FULL_DAY',
  FLEXIBLE_TIME = 'FLEXIBLE_TIME',
}

enum ORDER_TYPE {
  RANDOM = 'RANDOM',
  FLEXIBLE_ORDER = 'FLEXIBLE_ORDER',
}

@Component({
  selector: 'adv-create-presentation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzDropDownModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzCardModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzEmptyModule,
    HubFeatureLoadingModule,
    NzPaginationModule,
    NzTableModule,
    NzTagModule,
    NzDatePickerModule,
    NzPopoverModule,
    TuiRootModule,
    TuiPreviewModule,
    TuiButtonModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiInputModule,
    TuiRadioLabeledModule,
    TuiInputNumberModule,
    InfiniteScrollModule,
    TruncatePipe,
    TuiDialogModule,
    TuiStepperModule,
    DndModule,
    MatListModule,
    NgForOf,
    NgIf,
    MatIconModule,
  ],
  providers: [NzNotificationService, MatSnackBar],
  templateUrl: './create-presentation-slide.component.html',
  styleUrls: ['./create-presentation-slide.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CreatePresentationSlideComponent implements OnInit {
  itemsRadio = [
    { name: RUN_TIME_TYPE.FULL_DAY },
    { name: RUN_TIME_TYPE.FLEXIBLE_TIME },
  ];
  radioForm = new FormGroup({
    timeRunning: new FormControl(this.itemsRadio[0]),
  });
  itemsSort = [
    { name: ORDER_TYPE.RANDOM },
    { name: ORDER_TYPE.FLEXIBLE_ORDER },
  ];
  sortForm = new FormGroup({
    sortRunning: new FormControl(this.itemsSort[1]),
  });
  schedules: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  }[] = [];
  scheduleForm!: FormGroup;
  RUN_TIME_TYPE = RUN_TIME_TYPE;
  ORDER_TYPE = ORDER_TYPE;
  showSettingTimeRunning = RUN_TIME_TYPE.FULL_DAY;
  showSettingSortRunning = ORDER_TYPE.FLEXIBLE_ORDER;
  file: any;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  imageForm!: FormGroup;
  checked?: boolean[] = new Array(8).fill(false);
  checkedId?: Array<string> = [];
  currentDraggableEvent?: DragEvent;
  currentDragEffectMsg?: string;
  toggleSortFile = false;
  filteredItems: any[] = [];
  sortDialog: any;
  sortList: any;
  totalMiddle = 0;
  type: any;
  scheduleId: any;
  listDocuments: any;
  scheduleName = new FormControl();
  timeChange = new FormControl();

  constructor(
    private apiUserService: ApiUserService,
    private notification: NzNotificationService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private snackBarService: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      imagesArray: this.formBuilder.array([]),
    });

    this.scheduleForm = this.formBuilder.group(
      {
        startHour: [
          null,
          [Validators.required, Validators.min(0), Validators.max(23)],
        ],
        startMinute: [
          null,
          [Validators.required, Validators.min(0), Validators.max(59)],
        ],
        endHour: [
          null,
          [Validators.required, Validators.min(0), Validators.max(23)],
        ],
        endMinute: [
          null,
          [Validators.required, Validators.min(0), Validators.max(59)],
        ],
      },
      { validator: this.timeRangeValidator }
    );

    this.radioForm.valueChanges.subscribe((value: any) => {
      this.showSettingTimeRunning = value.timeRunning.name;
    });

    this.sortForm.valueChanges.subscribe((value: any) => {
      this.showSettingSortRunning = value.sortRunning.name;
      if (this.showSettingSortRunning === this.ORDER_TYPE.RANDOM) {
        this.timeChange.setValue(60);
        this.totalMiddle = 60;
      } else {
        this.timeChange.setValue(null);
      }
    });
    this.getListFile();
    this.route.queryParams.subscribe((params: any) => {
      this.scheduleId = params['scheduleId'];
      if (params['type']) {
        this.type = params['type'];
        const obj = {
          deviceId: params.deviceId,
          scheduleId: params.scheduleId,
          name: params.name,
        };
        this.apiUserService
          .viewDetailSlidePresentation(obj)
          .subscribe((res: any) => {
            this.scheduleName.setValue(res.data[0].scheduleInfo.name);
            this.showSettingTimeRunning = res.data[0].scheduleInfo.runTimeType;
            this.showSettingSortRunning = res.data[0].scheduleInfo.orderType;
            this.sortForm.patchValue({
              sortRunning: this.itemsSort.find(
                (item) => item.name === res.data[0].scheduleInfo.orderType
              ),
            });
            this.radioForm.patchValue({
              timeRunning: this.itemsRadio.find(
                (item) => item.name === res.data[0].scheduleInfo.runTimeType
              ),
            });
            if (res.data[0].scheduleInfo.orderType === this.ORDER_TYPE.RANDOM) {
              this.timeChange.setValue(res.data[0].scheduleInfo.timeToTransfer);
            }
            const listDocuments = res.data[0].listDocuments;
            this.filteredItems = listDocuments;

            this.listDocuments = res.data[0].listDocuments;
            for (let i = 0; i < listDocuments?.length; i++) {
              const imageFormGroup = this.formBuilder.group({
                inputFields: [listDocuments[i].loopNumber],
                middleInputFields: [listDocuments[i].duration],
                content: listDocuments[i],
              });

              this.imagesArray.push(imageFormGroup);
            }

            const schedules = res.data[0].listTimes?.map((item: any) => {
              const [startHour, startMinute] = item.fromTime
                .split(':')
                .map(Number);
              const [endHour, endMinute] = item.toTime.split(':').map(Number);

              return {
                startHour,
                startMinute,
                endHour,
                endMinute,
              };
            });
            this.schedules = schedules;
          });
      }
    });
  }

  removeItem(data: any): void {
    this.schedules = this.schedules.filter((item: any) => {
      return item.id !== data.id;
    });
  }

  get imagesArray(): FormArray {
    return this.imageForm.get('imagesArray') as FormArray;
  }

  getListFile(): void {
    this.apiUserService.getAllFiles().subscribe((res: any) => {
      this.file = res?.data.map((file: any) => {
        return {
          ...file,
          effectAllowed: 'move',
          disable: false,
          handle: false,
        };
      });
      const numberOfImages = this.file.length;
      this.checked = new Array(numberOfImages).fill(false);

      this.file.forEach((data: any) => {
        if (
          data.type === 'jpg' ||
          data.type === 'jpeg' ||
          data.type === 'png'
        ) {
          const img = new Image();
          img.src = `http://167.71.198.237:8080${data.path}`;
        } else if (data.type === 'mp4') {
          const video = document.createElement('video') as HTMLVideoElement;
          video.src = `http://167.71.198.237:8080${data.path}`;
          video.preload = 'auto';
        }
      });
    });
  }

  addSchedule() {
    if (this.scheduleForm?.valid) {
      const newSchedule = this.scheduleForm.value;

      if (this.isStartTimeAfterEndTime(newSchedule)) {
        this.notification.error(
          'Thông báo',
          'Giờ/phút bắt đầu không được lớn hơn giờ/phút kết thúc!',
          {
            nzDuration: 2000,
          }
        );
        return;
      }
      if (this.isOverlapping(newSchedule)) {
        this.notification.error(
          'Thông báo',
          'Khoảng thời gian này đã trùng với một khoảng thời gian khác!',
          {
            nzDuration: 2000,
          }
        );
        return;
      }
      this.schedules.push(newSchedule);

      this.scheduleForm.reset();
    }
  }

  isOverlapping(newSchedule: any): boolean {
    for (const schedule of this.schedules) {
      if (
        (newSchedule.startHour >= schedule.startHour &&
          newSchedule.startHour <= schedule.endHour) ||
        (newSchedule.endHour >= schedule.startHour &&
          newSchedule.endHour <= schedule.endHour) ||
        (newSchedule.startHour <= schedule.startHour &&
          newSchedule.endHour >= schedule.endHour)
      ) {
        return true;
      }
    }
    return false;
  }

  timeRangeValidator(formGroup: FormGroup) {
    const startHour = formGroup?.get('startHour')?.value;
    const startMinute = formGroup.get('startMinute')?.value;
    const endHour = formGroup.get('endHour')?.value;
    const endMinute = formGroup.get('endMinute')?.value;

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      return { timeRangeError: true };
    }
    return null;
  }

  isStartTimeAfterEndTime(schedule: any): boolean {
    return (
      schedule.startHour > schedule.endHour ||
      (schedule.startHour === schedule.endHour &&
        schedule.startMinute >= schedule.endMinute)
    );
  }

  trackByFn(index: any, item: any) {
    return item.id;
  }

  addFiles(content: any): void {
    this.sortDialog = this.dialogs.open(content, { size: 'page' }).subscribe();
  }

  chooseFile(data: any): void {
    if (this.isChecked(data)) {
      this.uncheckItem(data);
    } else {
      this.checkItem(data);
    }
  }

  isChecked(data: any): boolean {
    return (this.checkedId && this.checkedId.includes(data.id)) as boolean;
  }

  checkItem(data: any): void {
    if (!this.checkedId) {
      this.checkedId = [data.id];
    } else {
      this.checkedId.push(data.id);
    }
  }

  uncheckItem(data: any): void {
    if (this.checkedId) {
      this.checkedId = this.checkedId.filter((id: any) => {
        return id !== data.id;
      });
    }
  }

  onDragStart(event: DragEvent) {
    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open('Bắt đầu sắp xếp!', undefined, {
      duration: 2000,
    });
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.currentDragEffectMsg = `Kết thúc sắp xếp`;
    this.sortList = list;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open(
      this.currentDragEffectMsg || `Kết thúc sắp xếp`,
      undefined,
      { duration: 2000 }
    );
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }

  showSortFile(): void {
    this.toggleSortFile = !this.toggleSortFile;
    this.filteredItems = this.file.filter((item: any) =>
      this.checkedId?.includes(item.id)
    );
  }

  doneSortFile(observer: any): void {
    this.imageForm = this.formBuilder.group({
      imagesArray: this.formBuilder.array([]),
    });
    this.filteredItems = this.file.filter((item: any) =>
      this.checkedId?.includes(item.id)
    );
    const data = this.sortList?.length > 0 ? this.sortList : this.filteredItems;
    const numberOfImages = data?.length;
    for (let i = 0; i < numberOfImages; i++) {
      const imageFormGroup = this.formBuilder.group({
        inputFields: [],
        middleInputFields: [],
        content:
          this.sortList?.length > 0 ? this.sortList[i] : this.filteredItems[i],
      });

      this.imagesArray.push(imageFormGroup);
    }
    observer.complete();

    const imagesArray = this.imageForm.get('imagesArray') as FormArray;
    imagesArray.valueChanges.subscribe((values) => {
      this.totalMiddle = this.calculateMiddleInputFieldsSum(values);
    });

    for (let i = 0; i < imagesArray.length; i++) {
      this.subscribeToFormControls(imagesArray.at(i) as FormGroup);
    }
  }

  private subscribeToFormControls(formGroup: FormGroup) {
    const middleInputFields = formGroup.get('middleInputFields');
    if (middleInputFields) {
      middleInputFields.valueChanges.subscribe(() => {
        //TODO VALUES
      });
    }
  }

  calculateMiddleInputFieldsSum(data: any): number {
    let sum = 0;
    data?.forEach((item: any) => {
      if (item.middleInputFields !== null && !isNaN(item.middleInputFields)) {
        sum += item.middleInputFields;
      }
    });
    return sum;
  }

  cancelCreatePresentation(): void {
    this.router.navigate(['/adv/presentation-slide']);
  }

  createPresentation(): void {
    const scheduleRequest = {
      name: this.scheduleName.value,
      runTimeType: this.showSettingTimeRunning,
      orderType: this.showSettingSortRunning,
      timeToTransfer: this.timeChange.value ?? 0,
    };
    const scheduleId = this.type === 'edit' ? this.scheduleId : null;
    const imageForm = this.imageForm?.value?.imagesArray?.map((item: any) => {
      return {
        duration: item.inputFields || 0,
        loopNumber: item.middleInputFields || 0,
        documentId: item.content.id,
      };
    });
    const schedules = this.schedules?.map((item) => {
      return {
        fromTime: item.startHour + ':' + item.startMinute,
        toTime: item.endHour + ':' + item.endMinute,
      };
    });

    const obj = {
      scheduleId,
      scheduleTimeRequests: schedules ?? [],
      scheduleDocumentRequests: imageForm ?? [],
      scheduleRequest: scheduleRequest ?? null,
    };

    if (!this.scheduleName.value) {
      this.notification.error(
        'Thông báo',
        'Tên lịch trình chiếu không được bỏ trống',
        {
          nzDuration: 2000,
        }
      );
      return;
    }

    if (this.showSettingTimeRunning === RUN_TIME_TYPE.FLEXIBLE_TIME) {
      if (schedules?.length <= 0) {
        this.notification.error('Thông báo', 'Chưa có lịch tuỳ chỉnh', {
          nzDuration: 2000,
        });
        return;
      }
    }
    if (this.showSettingSortRunning === ORDER_TYPE.RANDOM) {
      if (!this.timeChange.value) {
        this.notification.error('Thông báo', 'Chưa nhập thời gian chuyển', {
          nzDuration: 2000,
        });
        return;
      }
    }
    if (imageForm?.length <= 0) {
      this.notification.error('Thông báo', 'Chưa có danh sách tệp', {
        nzDuration: 2000,
      });
      return;
    }
    console.log(obj);

    this.loadingService.showLoading();
    this.apiUserService
      .createSlidePresentation(obj)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe(() => {
        this.router.navigate(['/adv/presentation-slide']);
        // this.scheduleName.reset();
        // this.showSettingSortRunning = this.ORDER_TYPE.RANDOM;
        // this.showSettingTimeRunning = this.RUN_TIME_TYPE.FULL_DAY;
        // this.imageForm.reset();
        // this.schedules = [];
        this.notification.success(
          'Thông báo',
          'Tạo lịch trình chiếu thành công',
          {
            nzDuration: 2000,
          }
        );
      });
  }
}
