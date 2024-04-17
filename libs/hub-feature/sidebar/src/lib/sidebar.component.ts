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
  officeId?: number;
  folder: any;
  regions: any;

  constructor(private router: Router, private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
    this.getListFolder();
  }

  navigateDevice(data: any, i?: number): void {
    this.indexRegion = i ?? 0;
    this.indexPer = -1;
    this.indexSlideShow = false;
    this.router.navigate(['adv/device'], {
      queryParams: { regionId: data.id },
    });
  }

  navigateFolder(data: any, i?: number): void {
    this.indexPer = i ?? 0;
    this.indexSlideShow = false;
    this.indexRegion = -1;
    this.router.navigate(['adv/file'], { queryParams: { folderId: data.id } });
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      this.folder = res.data;
    });
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      this.regions = res.data;
      if (this.regions.length > 0) this.navigateDevice(this.regions[0]);
    });
  }

  activeSlideShow(): void {
    this.indexSlideShow = true;
    this.indexPer = -1;
    this.indexRegion = -1;
  }
}
