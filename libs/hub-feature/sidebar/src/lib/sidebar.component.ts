import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
export class SidebarComponent {
  office: any;
  ROUTE_TEAM = '/personnel/team';
  ROUTE_USER = '/personnel/user';
  isActivePerson = false;
  isActiveOt = false;
  isActiveAbs = false;
  indexPer?: number;
  officeId?: number;

  constructor(private router: Router) {}

  navigateOt(): void {
    this.router.navigate(['log/ot']);
  }

  navigateAbs(): void {
    this.router.navigate(['log/abs']);
  }
}
