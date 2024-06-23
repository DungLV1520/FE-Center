import { Component, Inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
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
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { catchError, debounceTime, finalize, tap, throwError } from 'rxjs';
import { SafePipe } from './safe.pipe';
import { HubFeatureLoadingModule, LoadingService } from '@hub-center/loading';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

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
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListUserComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  index = 0;
  length = 2;
  presentationSlide: any;
  presentationSlideOrigin: any;
  totalElements: any;
  pageNumber: any;
  readonly searchForm = new FormControl();

  constructor(
    private apiUserService: ApiUserService,
    private loadingService: LoadingService,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    const obj = {
      page: 0,
      size: this.pageSize,
    };
    this.getListUser(obj);

    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      const obj = {
        page: 0,
        size: this.pageSize,
        keywordSearch: data,
      };
      this.getListUser(obj);
    });
  }

  getListUser(obj: any): void {
    this.loadingService.showLoadingNext();
    this.apiUserService
      .getListUser(obj)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((res: any) => {
        this.presentationSlide = res?.data?.content;
        this.presentationSlideOrigin = res?.data?.content;
        this.totalElements = res?.data?.totalElements ?? 0;
        this.pageIndex = res?.data?.pageable?.pageNumber ?? 0;
      });
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex - 1;
    const obj = {
      page: this.pageIndex,
      size: this.pageSize,
    };
    this.getListUser(obj);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    const obj = {
      page: this.pageIndex,
      size: this.pageSize,
    };

    this.getListUser(obj);
  }

  updateUser(data: any) {
    const modal = this.modal.create({
      nzTitle: `Cập nhật thông tin ${data.username}`,
      nzContent: UpdateUserComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'Cập nhật',
      nzData: {
        data,
      },
      nzOnOk: () => {
        const name = modal.getContentComponent().getName();
        const phoneNumb = modal.getContentComponent().getPhone()?.toString();
        const password = modal.getContentComponent().getPassword();
        const email = modal.getContentComponent().getEmail();
        const gender = modal.getContentComponent().getGender();
        const role = modal.getContentComponent().getRole();
        const birthday = modal.getContentComponent().getBirthday();
        const params: any = {
          id: data.id,
          fullName: name,
          phoneNumb,
          mail: email,
          gender,
          role,
          birthday,
        };

        if (!name || name === '') {
          this.notification.error('Thông báo', 'Tên không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        if (!email || email === '') {
          this.notification.error('Thông báo', 'Email không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        if (!phoneNumb || phoneNumb === '') {
          this.notification.error(
            'Thông báo',
            'Số điện thoại không được bỏ trống',
            {
              nzDuration: 2000,
            }
          );
          return;
        }
        if (password && password !== '') {
          params.password = password;
        }
        this.loadingService.showLoading();
        this.apiUserService
          .updateUser(params)
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
                this.notification.success('Thông báo', 'Cập nhật thành công', {
                  nzDuration: 2000,
                });
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
                page: 0,
                size: this.pageSize,
              };
              this.getListUser(obj);
            })
          )
          .subscribe();
      },
    });
  }

  createUser() {
    const modal = this.modal.create({
      nzTitle: `Tạo thông tin người dùng`,
      nzContent: AddUserComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzOnOk: () => {
        const name = modal.getContentComponent().getName();
        const phoneNumb = modal.getContentComponent().getPhone()?.toString();
        const password = modal.getContentComponent().getPassword();
        const email = modal.getContentComponent().getEmail();
        const gender = modal.getContentComponent().getGender();
        const role = modal.getContentComponent().getRole();
        const username = modal.getContentComponent().getUsername();
        const birthday = modal.getContentComponent().getBirthday();
        const params: any = {
          fullName: name,
          phoneNumb,
          mail: email,
          gender,
          role,
          password,
          username,
          birthday,
        };
        // const formData = new FormData();
        // const jsonData = JSON.stringify(params);
        // const blob = new Blob([jsonData], { type: 'application/json' });
        // formData.append('userData', blob);

        if (!username || username === '') {
          this.notification.error('Thông báo', 'Username không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        if (!name || name === '') {
          this.notification.error('Thông báo', 'Tên không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        if (!email || email === '') {
          this.notification.error('Thông báo', 'Email không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        if (!phoneNumb || phoneNumb === '') {
          this.notification.error(
            'Thông báo',
            'Số điện thoại không được bỏ trống',
            {
              nzDuration: 2000,
            }
          );
          return;
        }
        if (!password || password === '') {
          this.notification.error('Thông báo', 'Mật khẩu không được bỏ trống', {
            nzDuration: 2000,
          });
          return;
        }
        this.loadingService.showLoading();
        this.apiUserService
          .addUser(params)
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
                this.notification.success('Thông báo', 'Tạo thành công', {
                  nzDuration: 2000,
                });
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
                page: 0,
                size: this.pageSize,
              };
              this.getListUser(obj);
            })
          )
          .subscribe();
      },
    });
  }
}
