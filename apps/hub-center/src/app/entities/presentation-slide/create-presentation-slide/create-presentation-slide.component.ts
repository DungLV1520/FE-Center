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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
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
  itemsRadio = [{ name: true }, { name: false }];
  radioForm = new FormGroup({
    timeRunning: new FormControl(this.itemsRadio[0]),
  });
  itemsSort = [{ name: true }, { name: false }];
  sortForm = new FormGroup({
    sortRunning: new FormControl(this.itemsSort[0]),
  });
  schedules: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  }[] = [];
  scheduleForm!: FormGroup;
  showSettingTimeRunning = true;
  showSettingSortRunning = true;
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

  constructor(
    private apiUserService: ApiUserService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private loadingService: LoadingService,
    private modal: NzModalService,
    private formBuilder: FormBuilder,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private snackBarService: MatSnackBar,
    private router: Router
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
      console.log(value);
      this.showSettingTimeRunning = value.timeRunning.name;
    });

    this.sortForm.valueChanges.subscribe((value: any) => {
      console.log(value);
      this.showSettingSortRunning = value.sortRunning.name;
    });
    this.getListFile();
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

  createPresentation(): void {
    console.log(this.imageForm.value);
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
    console.log(this.sortList);

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
        inputFields: [''],
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
}
