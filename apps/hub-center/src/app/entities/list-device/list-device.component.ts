import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
  Observable,
  BehaviorSubject,
  of,
  tap,
  finalize,
  catchError,
  throwError,
  debounceTime,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RenameModalComponent } from './renameModal/rename-modal.component';
import { IDevice } from '@hub-center/hub-model';

@Component({
  selector: 'adv-list-device',
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
  ],
  providers: [NzNotificationService, DatePipe],
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
})
export class ListDeviceComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  totalDevicesCount = 0;
  totalDevicesOnlineCount = 0;
  totalDevicesOfflineCount = 0;
  isModeViewTable = true;
  devices$: Observable<IDevice[]> | null = null;
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize = 15;
  allDevices: IDevice[] = [];
  removedDevices: any[] = [];
  regionId?: string;
  readonly searchForm = new FormControl();
  protected readonly Date = Date;
  protected readonly Number = Number;

  constructor(
    private apiUserService: ApiUserService,
    private loadingService: LoadingService,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe().subscribe((param) => {
      this.regionId = param['regionId'];
      if (param['regionId']) {
        this.loadingService.showLoading();
        this.loadDevices();
      }
    });

    setInterval(() => {
      this.loadDevices();
    }, 60000);

    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.loadingService.showLoading();
      this.loadDevices(data);
    });
  }

  loadDevices(data?: string) {
    const params = {
      regionId: this.regionId,
      page: 0,
      size: 15,
    } as any;

    if (data) {
      params['name'] = data;
    }

    this.apiUserService
      .getDeviceByRegionID(params)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((res) => {
        this.allDevices = ((res as any)?.data?.content as IDevice[]) ?? [];
        this.totalDevicesCount = this.allDevices.length; // Tính tổng số lượng thiết bị
        this.totalDevicesOnlineCount = this.allDevices.filter(
          (item: any) => item.status === 'ACTIVE'
        ).length;
        this.totalDevicesOfflineCount =
          this.totalDevicesCount - this.totalDevicesOnlineCount;
        this.updateDisplayedDevices();
      });
  }

  updateDisplayedDevices() {
    const startIndex = (this.currentPage$.value - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.devices$ = of(this.allDevices.slice(startIndex, endIndex));
  }

  handlePageChange(pageIndex: number) {
    this.currentPage$.next(pageIndex);
    this.updateDisplayedDevices();
  }

  onShowModeTable() {
    this.isModeViewTable = !this.isModeViewTable;
  }

  reloadPage() {
    this.loadingService.showLoading();
    this.currentPage$.next(1);
    this.loadDevices();
  }

  onConfirmDeleteDevice(id: string, deviceName: string) {
    this.modal.confirm({
      nzTitle: `Bạn có chắc muốn xoá thiết bị ${deviceName}?`,
      nzContent: 'Số lượng: 1',
      nzCancelText: 'Không',
      nzOkText: 'Đồng ý',
      nzOnOk: () => {
        this.removeDeviceById(id);
        this.onDeleteDevice(id, deviceName);
      },
    });
  }

  onDeleteDevice(id: string, deviceName: string) {
    this.modal.success({
      nzTitle: `Xoá thiết bị ${deviceName} thành công`,
      nzContent: 'Số lượng: 1',
      nzCancelText: 'Khôi phục',
      nzOkText: 'Đóng',
      nzOnOk: () => this.deleteDevice(id),
      nzOnCancel: () => {
        this.addDeviceBack(id);
        this.notification.success('Thông báo', 'Hoàn tác thành công!!!', {
          nzDuration: 2000,
        });
      },
    });
  }

  deleteDevice(id: string) {
    this.loadingService.showLoading();
    this.apiUserService
      .deleteDevice(id)
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
          this.loadDevices();
          this.loadingService.hideLoading();
        })
      )
      .subscribe();
  }

  removeDeviceById(id: string) {
    const deviceToRemove = this.allDevices.find((device) => device.id === id);
    if (deviceToRemove) {
      this.removedDevices.push(deviceToRemove);
      this.allDevices = this.allDevices.filter((device) => device.id !== id);
      this.totalDevicesCount--;
      deviceToRemove.status === 'ACTIVE'
        ? this.totalDevicesOnlineCount--
        : this.totalDevicesOfflineCount--;
      this.updateDisplayedDevices();
    }
  }

  addDeviceBack(id: string) {
    const deviceToAddBack = this.removedDevices.find(
      (device) => device.id === id
    );
    if (deviceToAddBack) {
      this.allDevices.push(deviceToAddBack);
      this.removedDevices = this.removedDevices.filter(
        (device) => device.id !== id
      );
      this.totalDevicesCount++;
      deviceToAddBack.status === 'ACTIVE'
        ? this.totalDevicesOnlineCount++
        : this.totalDevicesOfflineCount++;
      this.updateDisplayedDevices();
    }
  }

  renameDevice(id: string, deviceName: string) {
    const modal = this.modal.confirm({
      nzTitle: `Đổi tên thiết bị ${deviceName}`,
      nzContent: RenameModalComponent,
      nzCancelText: 'Đóng',
      nzOkText: 'OK',
      nzOnOk: () => {
        this.loadingService.showLoading();
        const params = {
          deviceId: id,
          name: modal.getContentComponent().getData(),
        };
        this.apiUserService
          .renameDevice(params)
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
                  'Đổi tên thiết bị thành công',
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

              this.loadDevices();
            })
          )
          .subscribe();
      },
    });
  }

  calculateTimeAgo(timeOffAgo: string): string | null {
    const currentTime = Date.now();
    const timeDifference = currentTime - Number(timeOffAgo);
    const formattedTimeAgo = this.datePipe.transform(
      timeDifference,
      'HH:mm dd/MM/yyyy'
    );
    return formattedTimeAgo;
  }
}
