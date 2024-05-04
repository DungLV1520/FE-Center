import {
  Component,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
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
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, debounceTime, finalize, tap, throwError } from 'rxjs';
import { SafePipe } from './safe.pipe';

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
  templateUrl: './presentation-slide.component.html',
  styleUrls: ['./presentation-slide.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PresentationSlideComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  @ViewChild('preview')
  index = 0;
  length = 2;
  presentationSlide: any;
  presentationSlideOrigin: any;
  totalElements: any;
  pageNumber: any;
  readonly searchForm = new FormControl();

  constructor(
    private apiUserService: ApiUserService,
    @Inject(TuiPreviewDialogService)
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private loadingService: LoadingService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    const obj = {
      page: 0,
      size: this.pageSize,
    };
    this.getListPresentationSlide(obj);

    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      const obj = {
        page: 0,
        size: this.pageSize,
        name: data,
      };
      this.getListPresentationSlide(obj);
    });
  }

  getListPresentationSlide(obj: any): void {
    this.loadingService.showLoading();
    this.apiUserService
      .getListPresentationSlide(obj)
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

  deleteFile(data: any) {
    this.loadingService.showLoading();
    this.apiUserService
      .deletePresentationSlide(data.id)
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
            page: 0,
            size: this.pageSize,
          };
          this.getListPresentationSlide(obj);
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  onConfirmDeleteFile(data: any) {
    this.modal.confirm({
      nzTitle: `Bạn có chắc muốn xoá lịch trình chiếu?`,
      nzContent: `Tên:  ${data.name}`,
      nzCancelText: 'Không',
      nzOkText: 'Đồng ý',
      nzOnOk: () => {
        this.presentationSlide = this.presentationSlide.filter((pre: any) => {
          return pre.id !== data.id;
        });
        this.modal.success({
          nzTitle: `Xoá lịch trình chiếu thành công!!!`,
          nzContent: `Tên: ${data.name}`,
          nzCancelText: 'Khôi phục',
          nzOkText: 'Đóng',
          nzOnOk: () => {
            this.deleteFile(data);
          },
          nzOnCancel: () => {
            this.presentationSlide = [...this.presentationSlideOrigin];
            this.notification.success(
              'Thông báo',
              'Khôi phục lịch trình chiếu thành công',
              {
                nzDuration: 2000,
              }
            );
          },
        });
      },
    });
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex - 1;
    const obj = {
      page: this.pageIndex,
      size: this.pageSize,
    };
    this.getListPresentationSlide(obj);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    const obj = {
      page: this.pageIndex,
      size: this.pageSize,
    };

    this.getListPresentationSlide(obj);
  }
}
