import { Component, Inject } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { NgForOf } from '@angular/common';
import { LisDevice } from '../presentation-slide.component';

@Component({
  standalone: true,
  selector: 'adv-view-full-device-apply',
  templateUrl: './view-full-device-apply.component.html',
  imports: [NzListModule, NzFormModule, NzCardModule, NgForOf],
  styleUrls: ['./view-full-device-apply.component.scss'],
})
export class ViewFullDeviceApplyComponent {
  listDevice: LisDevice[] = [];
  constructor(@Inject(NZ_MODAL_DATA) public data: any) {
    this.listDevice = data.listDevice;
  }
}
