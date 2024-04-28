import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TuiFileLike, TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiRootModule } from '@taiga-ui/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject, switchMap, of, Observable, timer, map, finalize } from 'rxjs';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import vi from '@angular/common/locales/vi';
import {TUI_LANGUAGE, TUI_VIETNAMESE_LANGUAGE} from '@taiga-ui/i18n';
import { NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';
registerLocaleData(vi);


@Component({
  imports: [
    CommonModule,
    FormsModule,
    TuiInputFilesModule,
    TuiRootModule,
    ReactiveFormsModule,
    NzSelectModule
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
        *ngIf="!control.value"
        accept="image/*"
        [formControl]="control"
        (reject)="onReject($event)"
      ></tui-input-files>

      <tui-files class="tui-space_top-1">
        <tui-file
          *ngIf="loadedFiles$ | async as file"
          [file]="file"
          [showDelete]="control.enabled"
          (removed)="removeFile()"
        ></tui-file>
        <tui-file
          *ngIf="rejectedFiles$ | async as file"
          [file]="file"
          [showDelete]="control.enabled"
          (removed)="clearRejected()"
        ></tui-file>
        <tui-file
          *ngIf="loadingFiles$ | async as file"
          state="loading"
          [file]="file"
          [showDelete]="control.enabled"
        ></tui-file>
      </tui-files>
      <nz-select
        class="w-100 mt-4"
        nzPlaceHolder="Chon kiểu hiển thị"
        [(ngModel)]="inputData"
      >
        <ng-container *ngFor="let item; of display">
          <nz-option
            nzValue="{{ item.id }}"
            nzLabel="{{ item.name }}"
          ></nz-option>
        </ng-container>
      </nz-select>
    </tui-root>
  `,
})
export class UploadFileComponent {
  readonly control = new FormControl();
  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => (file ? this.makeRequest(file) : of(null)))
  );

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
  inputData:any

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(vi_VN);
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.control.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {
    this.loadingFiles$.next(file);

    return timer(1000).pipe(
      map(() => {
        this.rejectedFiles$.next(file);
        return null;
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }

  getDataId(): string {
    return this.inputData;
  }

  getData() {
    return this.control.value;
  }
}
