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
import { HubFeatureLoadingModule } from '@hub-center/loading';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CONFIG_TABLE_COLUMN } from './config-table.config';
import { ApiUserService } from '@hub-center/hub-service/api-user';

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
  ],
  providers: [NzNotificationService],
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
})
export class ListPostComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  devices: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListDevices();
    setInterval(() => {
      this.getListDevices();
    }, 10000);
  }

  getListDevices() {
    this.apiUserService.getListDevice().subscribe((res: any) => {
      console.log(res);
      this.devices = res.data;
    });
  }
}
