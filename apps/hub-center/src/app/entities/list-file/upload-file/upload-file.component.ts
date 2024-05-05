import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TuiFileLike, TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiErrorModule, TuiRootModule } from '@taiga-ui/core';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { of } from 'rxjs';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import vi from '@angular/common/locales/vi';
import { TUI_LANGUAGE, TUI_VIETNAMESE_LANGUAGE } from '@taiga-ui/i18n';
import { NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
registerLocaleData(vi);

@Component({
  imports: [
    CommonModule,
    FormsModule,
    TuiInputFilesModule,
    TuiRootModule,
    ReactiveFormsModule,
    NzSelectModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
  standalone: true,
  selector: 'adv-upload-file',
  providers: [
    NzMessageService,
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_VIETNAMESE_LANGUAGE),
    },
  ],
  template: `
    <tui-root>
      <tui-input-files
        accept="image/*"
        [formControl]="control"
        [multiple]="true"
        (ngModelChange)="control.markAsTouched()"
        (reject)="onReject($event)"
      ></tui-input-files>

      <tui-files class="tui-space_top-1">
        <tui-file
          *ngFor="let file of control.valueChanges | async"
          [file]="file"
          [showDelete]="control.enabled"
          (removed)="removeFile(file)"
        ></tui-file>

        <tui-file
          *ngFor="let file of rejectedFiles"
          state="error"
          [file]="file"
          [showDelete]="control.enabled"
          (removed)="clearRejected(file)"
        ></tui-file>
      </tui-files>

      <tui-error
        [error]="['maxLength'] | tuiFieldError | async"
        [formControl]="control"
      ></tui-error>

      <nz-select
        class="w-100 mt-4"
        nzPlaceHolder="Chon kiểu hiển thị"
        [(ngModel)]="inputData"
      >
        <ng-container *ngFor="let item of display">
          <nz-option
            nzValue="{{ item.id }}"
            nzLabel="{{ item.name }}"
          ></nz-option>
        </ng-container>
      </nz-select>
    </tui-root>
  `,
})
export class UploadFileComponent implements OnInit {
  display = [
    {
      id: 0,
      name: 'Ngang',
    },
    {
      id: 1,
      name: 'Dọc',
    },
  ];
  inputData: any;

  readonly control = new FormControl([], [maxFilesLength(5)]);
  rejectedFiles: readonly TuiFileLike[] = [];

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(vi_VN);
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe((response) => {
      console.info('STATUS', response);
      console.info('ERRORS', this.control.errors, '\n');
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

  getDataId(): string {
    return this.inputData;
  }

  getData() {
    return this.control.value;
  }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({ value }: AbstractControl) =>
    value.length > maxLength
      ? {
          maxLength: new TuiValidationError(
            'Lỗi: Tải lên tối đa 5 tệp'
          ),
        }
      : null;
}
