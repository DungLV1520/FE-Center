import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ApiUserService } from '@hub-center/hub-service/api-user';

@Component({
  selector: 'hub-breadcrumb',
  standalone: true,
  imports: [CommonModule, NzBreadCrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadCrumbData: string[] = [];

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.apiUserService.breadCrumb$.subscribe((data) => {
      this.breadCrumbData = data;
    });
  }
}
