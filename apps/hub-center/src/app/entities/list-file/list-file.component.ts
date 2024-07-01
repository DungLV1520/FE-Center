/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Component,
  ElementRef,
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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { catchError, debounceTime, finalize, tap, throwError } from 'rxjs';
import { RenameModalComponent } from './renameModal/rename-modal.component';
import { SafePipe } from './safe.pipe';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MoveFileComponent } from './moveFile/move-file.component';
import { AddFolderComponent } from './addFolder/add-folder.component';

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
  @ViewChild('preview')
  preview?: any;
  @ViewChild('contentSample')
  contentSample?: TemplateRef<Record<string, unknown>>;
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  isModeViewTable = false;
  index = 0;
  length = 2;
  checked?: boolean[] = new Array(8).fill(false);
  totalElements!: number;
  totalImage!: number;
  totalVideo!: number;
  pageNumber!: number;
  folderId!: string;
  path!: string;
  checkedId?: Array<string> = [];
  readonly searchForm = new FormControl();
  itemPreview: any;
  devices: any;
  file: any;
  fileOriginal: any;

  constructor(
    private apiUserService: ApiUserService,
    @Inject(TuiPreviewDialogService)
    private readonly previewService: TuiPreviewDialogService,
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private loadingService: LoadingService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['folderId']) {
        this.folderId = params['folderId'];
        const obj = {
          folderId: params['folderId'],
          page: 0,
          size: this.pageSize,
        };
        this.getListFile(obj);
        this.checkedId = [];
      }
    });

    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      const obj = {
        folderId: this.folderId,
        page: 0,
        size: this.pageSize,
        docName: data,
      };
      this.getListFile(obj);
    });
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

  resetCheck(): void {
    this.checkedId = [];
    this.checked = new Array(this.totalElements).fill(false);
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
    this.path = 'https://cms.advtv.vn' + data.path;

    this.previewService.open(this.preview || '').subscribe({
      complete: () => {
        console.info('complete');
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
    // console.log(index);
  }

  getListFile(obj: any): void {
    this.loadingService.showLoading();
    this.apiUserService
      .getListFile(obj)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((res: any) => {
        this.file = res?.data?.content;
        this.fileOriginal = res?.data?.content;
        this.totalElements = res?.data?.totalElements ?? 0;
        this.totalImage = res?.data?.totalImage ?? 0;
        this.totalVideo = res?.data?.totalVideo ?? 0;
        this.pageIndex = res?.data?.pageable?.pageNumber ?? 0;
        this.checked = new Array(res?.data?.totalElements).fill(false);
      });
  }

  renameFile(data: any) {
    const modal = this.modal.confirm({
      nzTitle: `Đổi tên tệp ${data.name}`,
      nzContent: RenameModalComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'Đổi tên',
      nzOnOk: () => {
        const name = modal.getContentComponent().getData();
        const params = {
          name,
        };

        if (!name || name === '') {
          return new Promise((resolve, reject) => {
            this.notification.error(
              'Thông báo',
              'Tên tệp không được bỏ trống',
              {
                nzDuration: 2000,
              }
            );
            reject();
          });
        } else {
          return new Promise((resolve, reject) => {
            this.apiUserService
              .renameFile(data.id, params)
              .pipe(
                tap((res: any) => {
                  if (res?.result?.ok == false) {
                    this.notification.error(
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
                  this.notification.error(
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
                    size: this.pageSize,
                  };
                  this.getListFile(obj);
                  resolve();
                })
              )
              .subscribe();
          });
        }
      },
    });
  }

  moveFile(data?: any): void {
    const modal = this.modal.create({
      nzTitle: `Di chuyển tệp`,
      nzContent: MoveFileComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzWidth: 500,
      nzOnOk: () => {
        const idFolder = modal.getContentComponent().getData();
        if (!idFolder || idFolder === '') {
          return new Promise((resolve, reject) => {
            this.notification.error('Thông báo', 'Chưa chọn thư mục!!!', {
              nzDuration: 2000,
            });
            reject();
          });
        } else {
          return new Promise((resolve, reject) => {
            let obj = [] as any;
            if (this.isModeViewTable) {
              obj = [
                {
                  docId: data.id,
                  oldFolderId: this.folderId,
                  newFolderId: idFolder,
                },
              ];
            } else {
              obj = [];
              if (data?.id) {
                obj.push({
                  docId: data.id,
                  oldFolderId: this.folderId,
                  newFolderId: idFolder,
                });
              } else {
                this.checkedId?.forEach((id) => {
                  obj.push({
                    docId: id,
                    oldFolderId: this.folderId,
                    newFolderId: idFolder,
                  });
                });
              }
            }

            this.apiUserService
              .moveFile(obj)
              .pipe(
                finalize(() => {
                  resolve();
                })
              )
              .subscribe({
                next: (res: any) => {
                  if (res.result.ok) {
                    this.notification.success(
                      'Thông báo',
                      'Di chuyển tệp thành công!!!',
                      {
                        nzDuration: 2000,
                      }
                    );
                    const obj = {
                      folderId: this.folderId,
                      page: 0,
                      size: this.pageSize,
                    };
                    this.getListFile(obj);
                  } else {
                    this.notification.error('Thông báo', res.result.message, {
                      nzDuration: 2000,
                    });
                  }
                },
              });
          });
        }
      },
    });
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
          this.loadingService.hideLoading();
          return throwError(err?.error?.result?.message);
        }),
        finalize(() => {
          const obj = {
            folderId: this.folderId,
            page: 0,
            size: this.pageSize,
          };
          this.getListFile(obj);
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  onConfirmDeleteFile(data: any) {
    this.modal.confirm({
      nzTitle: `Bạn có chắc muốn xoá tệp?`,
      nzContent: `Tên:  ${data.name}`,
      nzCancelText: 'Không',
      nzOkText: 'Đồng ý',
      nzOnOk: () => {
        this.file = this.file.filter((file: any) => {
          return file.id !== data.id;
        });
        this.modal.success({
          nzTitle: `Xoá tệp thành công!!!`,
          nzContent: `Tên: ${data.name}`,
          nzCancelText: 'Khôi phục',
          nzOkText: 'Đóng',
          nzOnOk: () => {
            this.deleteFile(data);
          },
          nzOnCancel: () => {
            this.file = [...this.fileOriginal];
            this.notification.success('Thông báo', 'Khôi phục tệp thành công', {
              nzDuration: 2000,
            });
          },
        });
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
    const modal = this.modal.create({
      nzTitle: `Tải tệp lên`,
      nzContent: UploadFileComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzWidth: 500,
      nzOnOk: () => {
        const files = modal.getContentComponent().getData();
        const displayType = modal.getContentComponent().getDataId();
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        if (files?.length! <= 0) {
          return new Promise((resolve, reject) => {
            this.notification.error('Thông báo', 'Chưa chọn tệp', {
              nzDuration: 2000,
            });
            reject();
          });
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        } else if (files?.length! > 5) {
          return new Promise((resolve, reject) => {
            this.notification.error('Thông báo', 'Chi cho phép tải 5 tệp', {
              nzDuration: 2000,
            });
            reject();
          });
        } else {
          return new Promise((resolve, reject) => {
            const obj = {
              folderId: this.folderId,
              displayType: displayType,
            };
            const formData = new FormData();
            files?.forEach((file) => {
              formData.append('files', file);
            });
            const jsonData = JSON.stringify(obj);
            const blob = new Blob([jsonData], { type: 'application/json' });
            formData.append('data', blob);

            this.apiUserService
              .uploadFile(formData)
              .pipe(
                finalize(() => {
                  resolve();
                })
              )
              .subscribe({
                next: (res) => {
                  if (res.result.ok) {
                    this.notification.success(
                      'Thông báo',
                      'Tải tệp lên thành công',
                      {
                        nzDuration: 2000,
                      }
                    );
                    const obj = {
                      folderId: this.folderId,
                      page: 0,
                      size: this.pageSize,
                    };
                    this.getListFile(obj);
                  } else {
                    this.notification.error('Thông báo', res.result.message, {
                      nzDuration: 2000,
                    });
                  }
                },
                error: () => {
                  this.notification.error('Thông báo', 'Tải tệp thất bại', {
                    nzDuration: 2000,
                  });
                },
              });
          });
        }
      },
    });
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex - 1;
    const obj = {
      folderId: this.folderId,
      page: this.pageIndex,
      size: this.pageSize,
    };
    this.getListFile(obj);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    const obj = {
      folderId: this.folderId,
      page: this.pageIndex,
      size: this.pageSize,
    };

    this.getListFile(obj);
  }

  checkAll(): void {
    this.checked = new Array(this.totalElements).fill(true);
    this.checkedId = this.file.map((data: any) => {
      return data.id;
    });
  }

  addFolder() {
    const modal = this.modal.create({
      nzTitle: `Tạo thư mục`,
      nzContent: AddFolderComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzOnOk: () => {
        const name = modal.getContentComponent().getFolderName();
        const id = modal.getContentComponent().getFolderPositionSave();

        if (!name || name === '') {
          this.notification.error(
            'Thông báo',
            'Tên thư mục không được bỏ trống',
            {
              nzDuration: 2000,
            }
          );
          return;
        }
        const obj = {
          name,
          description: name,
          parentId: id,
        };
        this.loadingService.showLoading();
        this.apiUserService.createFolder(obj).subscribe((res: any) => {
          if (res.result.ok) {
            this.apiUserService.sendFolder(true);
          }
        });
      },
    });
  }
}
