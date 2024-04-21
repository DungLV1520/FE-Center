import {
  Component,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CONFIG_TABLE_COLUMN } from './config-table.config';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import {
  TuiPreviewDialogService,
  TuiPreviewModule,
} from '@taiga-ui/addon-preview';
import { tuiClamp } from '@taiga-ui/cdk';
import {
  TuiDialogContext,
  TuiAlertService,
  TuiButtonModule,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { RenameModalComponent } from './renameModal/rename-modal.component';
import { SafePipe } from './safe.pipe';
import { UploadFileComponent } from './upload-file/upload-file.component';

@Component({
  selector: 'adv-list-file',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    SafePipe,
  ],
  providers: [NzNotificationService],
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListFileComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  devices: any;
  totalItems = 0;
  pageIndex = 1;
  pageSize = 10;
  isModeViewTable = true;
  @ViewChild('preview')
  readonly preview?: TemplateRef<TuiDialogContext>;
  @ViewChild('contentSample')
  readonly contentSample?: TemplateRef<Record<string, unknown>>;
  index = 0;
  length = 2;
  file: any;
  totalElements: any;
  totalImage: any;
  totalVideo: any;
  folderId: any;
  itemPreview: any;
  path: any;
  checked?: boolean[] = new Array(8).fill(false);

  constructor(
    private apiUserService: ApiUserService,
    @Inject(TuiPreviewDialogService)
    private readonly previewService: TuiPreviewDialogService,
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private loadingService: LoadingService,
    private modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['folderId']) {
        this.folderId = params['folderId'];
        const obj = {
          folderId: params['folderId'],
          page: 0,
          size: 100,
        };
        this.getListFile(obj);
      }
    });
  }

  onShowModeTable() {
    this.isModeViewTable = !this.isModeViewTable;
  }

  get previewContent(): PolymorpheusContent {
    return this.index === 0 && this.contentSample
      ? this.contentSample
      : 'https://avatars.githubusercontent.com/u/10106368';
  }

  show(data: any): void {
    this.itemPreview = data;
    this.path = 'http://167.71.198.237:8080' + data.path;

   setTimeout(() => {
    const a = document.querySelectorAll('body img');
    console.log(a);
   }, 2000);

    this.previewService.open(this.preview || '').subscribe({
      complete: () => {
        console.info('complete')


      },
    });
  }

  download(): void {
    this.alerts.open('Downloading...').subscribe();
  }

  delete(): void {
    this.alerts.open('Deleting...').subscribe();
  }

  onSwipe(swipe: any): void {
    if (swipe.direction === 'left') {
      this.index = tuiClamp(this.index + 1, 0, this.length - 1);
    }

    if (swipe.direction === 'right') {
      this.index = tuiClamp(this.index - 1, 0, this.length - 1);
    }
  }

  showChecked(index: number): void {
    console.log(index);
  }

  getListFile(obj: any): void {
    this.apiUserService.getListFile(obj).subscribe((res: any) => {
      this.file = res?.data?.content;
      this.totalElements = res?.data?.totalElements;
      this.totalImage = res?.data?.totalImage;
      this.totalVideo = res?.data?.totalVideo;
    });
  }

  renameFile(data: any) {
    const modal = this.modal.success({
      nzTitle: `Đổi tên tệp ${data.name}`,
      nzContent: RenameModalComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'Đổi tên',
      nzOnOk: () => {
        const params = {
          name: modal.getContentComponent().getData(),
        };
        this.apiUserService
          .renameFile(data.id, params)
          .pipe(
            tap((res: any) => {
              if (res?.result?.ok == false) {
                this.notification.success(
                  'Thông báo',
                  res?.result?.message ?? 'Đã có lỗi, vui lòng thử lại',
                  {
                    nzDuration: 2000,
                  }
                );
              } else {
                this.notification.success(
                  'Thông báo',
                  'Đổi tên tệp thành công',
                  {
                    nzDuration: 2000,
                  }
                );
              }
            }),
            catchError((err) => {
              this.notification.success(
                'Thông báo',
                err?.result?.message ?? 'Đã có lỗi, vui lòng thử lại',
                {
                  nzDuration: 2000,
                }
              );
              return throwError(err?.error?.result?.message);
            }),
            finalize(() => {
              const obj = {
                folderId: this.folderId,
                page: 0,
                size: 100,
              };
              this.getListFile(obj);
            })
          )
          .subscribe();
      },
    });
  }

  moveFile(data: any): void {
    // this.apiUserService.renameFile(data.id,).subscribe();
  }

  deleteFile(data: any) {
    this.loadingService.showLoading();
    this.apiUserService
      .deleteFile(data.id)
      .pipe(
        tap((res: any) => {
          if (res.result.ok === true) {
            this.notification.success('Thông báo', 'Xoá thành công!!!', {
              nzDuration: 2000,
            });
          }
        }),
        catchError((err) => {
          console.log(err);
          this.loadingService.hideLoading();
          return throwError(err?.error?.result?.message);
        }),
        finalize(() => {
          const obj = {
            folderId: this.folderId,
            page: 0,
            size: 100,
          };
          this.getListFile(obj);
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  onConfirmDeleteFile(data: any) {
    this.modal.confirm({
      nzTitle: `Bạn có chắc muốn xoá tệp ${data.name}?`,
      nzContent: 'Số lượng: 1',
      nzCancelText: 'Không',
      nzOkText: 'Đồng ý',
      nzOnOk: () => {
        this.deleteFile(data);
      },
    });
  }

  checkDisPlay(data: any): string {
    if (data == 0) {
      return 'Dọc';
    }
    return 'Ngang';
  }

  showUploadFile() {
    this.modal.create({
      nzTitle: `Tải tệp lên`,
      nzContent: UploadFileComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzWidth: 500,
      nzOnOk: () => {
        console.log('aaaaa');
      },
    });
  }
}
