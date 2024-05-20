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
  ROUTE_DEVICE = 'adv/device';
  ROUTE_FOLDER = 'adv/file';
  indexSlideShow = false;
  indexPer = 0;
  indexRegion = 0;
  subDeviceIndex = 0;
  subFolderIndex = -1;
  openDevice = -1;
  folder: any;
  regions: any;
  checkOpenReloadFile = false;
  checkOpenReloadDevice = true;
  titleDevice = 'Thiết bị';
  titleFolder = 'Tệp';
  titleSlide = 'Trình chiếu';
  createSlideTitle = 'Tạo lịch trình chiếu';

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
    this.apiUserService.addFolder$.subscribe((data) => {
      if (data) {
        this.getListFolder();
      }
    });
  }

  navigateOriginalDevice(): void {
    if (this.regions?.length <= 0) {
      const obj = [this.titleDevice];
      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_DEVICE]);
    }
  }

  navigateOriginalFile(): void {
    if (this.folder?.length <= 0) {
      const obj = [this.titleDevice];
      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_FOLDER]);
    }
  }

  navigateDevice(data: any, i?: number, item?: any, index?: number): void {
    this.indexRegion = i ?? 0;
    this.indexPer = -1;
    this.indexSlideShow = false;
    this.subFolderIndex = -1;
    if (data?.subs?.length > 0) {
      const obj = [
        this.titleDevice,
        data.name,
        item ? item.name : data?.subs[0]?.name,
      ];
      this.subDeviceIndex = index ?? 0;

      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_DEVICE], {
        queryParams: { regionId: item ? item.id : data?.subs[0]?.id },
      });
    } else {
      const obj = [this.titleDevice, data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_DEVICE], {
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
        this.titleFolder,
        data.name,
        item ? item.name : data?.subs[0]?.name,
      ];
      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_FOLDER], {
        queryParams: { folderId: item ? item.id : data?.subs[0]?.id },
      });
      this.subFolderIndex = index ?? 0;
    } else {
      const obj = [this.titleFolder, data.name];
      this.apiUserService.sendData(obj);
      this.router.navigate([this.ROUTE_FOLDER], {
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
        if (url.includes(this.ROUTE_FOLDER)) {
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
            const obj = [this.titleSlide, this.createSlideTitle];
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
        this.regions = res.data.map((item: any) => {
          return { ...item };
        });

        if (this.regions.length === 1) {
          this.navigateDevice(this.regions[0]);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const check = JSON.parse(localStorage.getItem('navigate')!);

        if (check) {
          if (this.regions.length > 0) this.navigateDevice(this.regions[0]);
          const url = this.router.url;
          if (url.includes(this.ROUTE_DEVICE)) {
            this.checkOpenReloadFile = false;
            this.checkOpenReloadDevice = true;
            this.route.queryParams.subscribe((params: any) => {
              this.checkNavigate(this.regions, params.regionId);
            });
          }
          localStorage.removeItem('navigate');
        } else {
          const url = this.router.url;
          if (url.includes(this.ROUTE_DEVICE)) {
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
    const obj = [this.titleSlide];
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

  checkNavigate(data?: any, id?: string): void {
    const url = this.router.url;
    let found = false;
    for (let i = 0; i < data?.length; i++) {
      if (data[i].id === id) {
        found = true;
        if (url.includes(this.ROUTE_DEVICE)) {
          this.subDeviceIndex = -1;
          this.navigateDevice(data[i], i);
        } else if (url.includes(this.ROUTE_FOLDER)) {
          this.navigateFolder(data[i], i);
        }
        break;
      }

      if (data[i]?.subs) {
        for (let j = 0; j < data[i].subs.length; j++) {
          if (data[i].subs[j].id === id) {
            found = true;
            if (url.includes(this.ROUTE_DEVICE)) {
              this.regions = this.regions.map((item: any, index: number) => {
                const showValue = index === i ? true : false;
                return { ...item, show: showValue };
              });
              this.openDevice = i;
              this.navigateDevice(data[i], i, data[i].subs[j], j);
            } else if (url.includes(this.ROUTE_FOLDER)) {
              this.folder = this.folder.map((item: any, index: number) => {
                const showValue = index === i ? true : false;
                return { ...item, show: showValue };
              });
              this.navigateFolder(data[i], i, data[i].subs[j], j);
            }
            break;
          }
        }
      }

      if (found) break;
    }
  }
}
