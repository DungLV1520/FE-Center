import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'hub-breadcrumb',
  standalone: true,
  imports: [CommonModule, NzBreadCrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  destroyed$ = new ReplaySubject<boolean>();
  title = 'ADV CMS';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event: any) => {
        const currentUrl = event?.routerEvent?.urlAfterRedirects;
        if (currentUrl?.includes('/adv/device')) {
          this.title = 'Danh sách thiết bị';
          return;
        }
        if (currentUrl?.includes('/adv/file')) {
          this.title = 'Danh sách tệp';
          return;
        }
      });
  }
}
