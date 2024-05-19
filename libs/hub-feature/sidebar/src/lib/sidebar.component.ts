import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { finalize } from 'rxjs';
import { LoadingService } from '@hub-center/loading';

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
  openDevice = -1;
  officeId?: number;
  folder: any;
  regions: any;
  checkOpenReloadFile = false;
  checkOpenReloadDevice = true;

  constructor(
    private router: Router,
    private apiUserService: ApiUserService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getListRegion();
    this.getListFolder();

    this.apiUserService.addRegion$.subscribe((data) => {
      if (data) {
        this.getListRegion();
      }
    });
  }

  navigateDevice(data: any, i?: number, item?: any, index?: number): void {
    this.indexRegion = i ?? 0;
    this.indexPer = -1;
    this.indexSlideShow = false;
    this.subFolderIndex = -1;
    if (data?.subs?.length > 0) {
      const obj = [
        'Khu vực',
        data.name,
        item ? item.name : data?.subs[0]?.name,
      ];
      this.subDeviceIndex = index ?? 0;

      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/device'], {
        queryParams: { regionId: item ? item.id : data?.subs[0]?.id },
      });
    } else {
      const obj = ['Khu vực', data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/device'], {
        queryParams: { regionId: data.id },
      });
    }
  }

  navigateFolder(data: any, i?: number, item?: any, index?: number): void {
    this.indexPer = i ?? 0;
    this.indexSlideShow = false;
    this.indexRegion = -1;
    this.subDeviceIndex = -1;
    if (data?.subs?.length > 0) {
      const obj = [
        'Thư mục',
        data.name,
        item ? item.name : data?.subs[0]?.name,
      ];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/file'], {
        queryParams: { folderId: item ? item.id : data?.subs[0]?.id },
      });
      this.subFolderIndex = index ?? 0;
    } else {
      const obj = ['Thư mục', data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate(['adv/file'], {
        queryParams: { folderId: data.id },
      });
    }
  }

  getListFolder(): void {
    this.apiUserService
      .getListFolder()
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((res: any) => {
        this.folder = res.data;
        const url = this.router.url;
        if (url.includes('/adv/file')) {
          this.checkOpenReloadFile = true;
          this.checkOpenReloadDevice = false;
          this.route.queryParams.subscribe((params: any) => {
            this.checkNavigate(this.folder, params.folderId);
          });
        } else {
          if (url.includes('/adv/presentation-slide')) {
            this.checkHiddenNotPresentation();
            this.activeSlideShow();
          } else if (url.includes('/adv/create-presentation-slide')) {
            this.checkActiveSlideShow();
            this.checkHiddenNotPresentation();
            const obj = ['Trình chiếu', 'Tạo lịch trình chiếu'];
            this.apiUserService.sendData(obj);
          }
        }
      });
  }

  checkHiddenNotPresentation(): void {
    this.checkOpenReloadFile = false;
    this.checkOpenReloadDevice = false;
  }

  getListRegion(): void {
    this.apiUserService
      .getListRegion()
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((res: any) => {
        this.regions = res.data;
        this.regions = res.data.map((item: any, index: number) => {
          return { ...item };
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const check = JSON.parse(localStorage.getItem('navigate')!);

        if (check) {
          if (this.regions.length > 0) this.navigateDevice(this.regions[0]);
          const url = this.router.url;
          if (url.includes('/adv/device')) {
            this.checkOpenReloadFile = false;
            this.checkOpenReloadDevice = true;
            this.route.queryParams.subscribe((params: any) => {
              this.checkNavigate(this.regions, params.regionId);
            });
          }
          localStorage.removeItem('navigate');
        } else {
          const url = this.router.url;
          if (url.includes('/adv/device')) {
            this.checkOpenReloadFile = false;
            this.checkOpenReloadDevice = true;
            this.route.queryParams.subscribe((params: any) => {
              this.checkNavigate(this.regions, params.regionId);
            });
          }
        }
      });
  }

  activeSlideShow(): void {
    this.checkActiveSlideShow();
    const obj = ['Trình chiếu'];
    this.apiUserService.sendData(obj);
    this.router.navigate(['adv/presentation-slide']);
  }

  checkActiveSlideShow(): void {
    this.subFolderIndex = -1;
    this.subDeviceIndex = -1;
    this.indexSlideShow = true;
    this.indexPer = -1;
    this.indexRegion = -1;
  }

  checkNavigate(a?: any, id?: string): void {
    const url = this.router.url;
    let found = false;
    for (let i = 0; i < a?.length; i++) {
      if (a[i].id === id) {
        found = true;
        if (url.includes('/adv/device')) {
          this.subDeviceIndex = -1;
          this.navigateDevice(a[i], i);
        } else if (url.includes('/adv/file')) {
          this.navigateFolder(a[i], i);
        }
        break;
      }

      if (a[i]?.subs) {
        for (let j = 0; j < a[i].subs.length; j++) {
          if (a[i].subs[j].id === id) {
            found = true;
            if (url.includes('/adv/device')) {
              this.regions = this.regions.map((item: any, index: number) => {
                const showValue = index === i ? true : false;
                return { ...item, show: showValue };
              });
              this.openDevice = i;
              this.navigateDevice(a[i], i, a[i].subs[j], j);
            } else if (url.includes('/adv/file')) {
              this.folder = this.folder.map((item: any, index: number) => {
                const showValue = index === i ? true : false;
                return { ...item, show: showValue };
              });
              this.navigateFolder(a[i], i, a[i].subs[j], j);
            }
            break;
          }
        }
      }

      if (found) break;
    }
  }
}
