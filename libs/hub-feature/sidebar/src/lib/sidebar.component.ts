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
  isActivePerson = false;
  isActiveOt = false;
  isActiveAbs = false;
  indexPer?: number;
  officeId?: number;
  folder: any;
  regions: any;

  constructor(private router: Router, private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
    this.getListFolder();
  }

  navigateOt(data: any): void {
    this.router.navigate(['adv/device'], {
      queryParams: { regionId: data.id },
    });
    this.isActiveOt = true;
    this.isActiveAbs = false;
  }

  navigateAbs(data: any): void {
    this.router.navigate(['adv/file'], { queryParams: { folderId: data.id } });
    this.isActiveAbs = true;
    this.isActiveOt = false;
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      this.folder = res.data;
    });
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      this.regions = res.data;
      if (this.regions.length > 0) this.navigateOt(this.regions[0]);
    });
  }
}
