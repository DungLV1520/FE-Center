import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CONFIG_TABLE_COLUMN } from './config-table.config';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

interface IDevice {
  id: string;
  name: string;
  description: string;
  status: string;
  available: boolean;
  timeOffAgo: string;
  location: string;
  identityDevice: string;
  userId: string;
  insDatetime: string;
  updDatetime: string;
}

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
  providers: [NzNotificationService],
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
  allDevices: IDevice[] = []; // Lưu trữ toàn bộ dữ liệu

  constructor(private apiUserService: ApiUserService, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.loadDevices();
    setInterval(() => {
      this.loadDevices();
    }, 10000);
  }

  loadDevices() {
    this.apiUserService.getListDevice().subscribe((res) => {
      this.allDevices = ((res as any)?.data as IDevice[]) ?? [];
      this.totalDevicesCount = this.allDevices.length; // Tính tổng số lượng thiết bị
      this.totalDevicesOnlineCount = this.allDevices.filter(
        (item: any) => item.status === 'ACTIVE'
      ).length;
      this.totalDevicesOfflineCount =
        this.totalDevicesCount - this.totalDevicesOnlineCount;
      this.updateDisplayedDevices();
    });
    this.loadingService.hideLoading();
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
}
