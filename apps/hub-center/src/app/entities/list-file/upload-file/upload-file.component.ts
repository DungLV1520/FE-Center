import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TuiFileLike, TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiRootModule } from '@taiga-ui/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, switchMap, of, Observable, timer, map, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule,
    TuiInputFilesModule,
    TuiRootModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  selector: 'adv-upload-file',
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
    </tui-root>
  `,
  providers: [NzMessageService],
})
export class UploadFileComponent {
  readonly control = new FormControl();

  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => (file ? this.makeRequest(file) : of(null)))
  );

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
}
