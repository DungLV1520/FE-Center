import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ApiUserService } from '@hub-center/hub-service/api-user';

@Component({
  selector: 'hub-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  office: any;
  ROUTE_TEAM = '/personnel/team';
  ROUTE_USER = '/personnel/user';
  indexSlideShow = false;
  indexPer = 0;
  indexRegion = 0;
  subDeviceIndex = 0;
  subFolderIndex = -1;
  officeId?: number;
  folder: any;
  regions: any;

  constructor(private router: Router, private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
    this.getListFolder();
  }

  navigateDevice(data: any, i?: number, item?: any, index?: any): void {
    this.indexRegion = i ?? 0;
    this.indexPer = -1;
    this.indexSlideShow = false;
    this.subFolderIndex = -1;
    if (data?.subs?.length > 0) {
      const obj = [
        'Thiết bị',
        data.name,
        item ? item.name : data?.subs[0]?.name,
      ];
      this.subDeviceIndex = index ?? 0;
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/device'], {
        queryParams: { regionId: item ? item.id : data?.subs[0]?.id },
      });
    } else {
      const obj = ['Thiết bị', data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/device'], {
        queryParams: { regionId: data.id },
      });
    }
  }

  navigateFolder(data: any, i?: number, item?: any, index?: any): void {
    this.indexPer = i ?? 0;
    this.indexSlideShow = false;
    this.indexRegion = -1;
    this.subDeviceIndex = -1;
    if (data?.subs?.length > 0) {
      const obj = ['Tệp', data.name, item ? item.name : data?.subs[0]?.name];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/file'], {
        queryParams: { folderId: item ? item.id : data?.subs[0]?.id },
      });
      this.subFolderIndex = index ?? 0;
    } else {
      const obj = ['Tệp', data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/file'], {
        queryParams: { folderId: data.id },
      });
    }
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      this.folder = res.data;
    });
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      this.regions = res.data;
      this.regions = res.data.map((item: any, index: number) => {
        const showValue = index === 0 ? item.subs.length > 0 : false;
        return { ...item, show: showValue };
      });

      if (this.regions.length > 0) this.navigateDevice(this.regions[0]);
      // this.router.navigate(['adv/create-presentation-slide']);
    });
  }

  activeSlideShow(): void {
    this.subFolderIndex = -1;
    this.subDeviceIndex = -1;
    this.indexSlideShow = true;
    this.indexPer = -1;
    this.indexRegion = -1;
    const obj = ['Trình chiếu'];
    this.apiUserService.sendData(obj);
    this.router.navigate(['adv/presentation-slide']);
  }
}
