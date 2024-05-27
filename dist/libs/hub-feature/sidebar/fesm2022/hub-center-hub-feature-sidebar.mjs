import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from 'ng-zorro-antd/layout';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import * as i6 from 'ng-zorro-antd/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i7 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i2 from '@hub-center/hub-service/api-user';
import { finalize } from 'rxjs';
import * as i3 from '@hub-center/loading';

function SidebarComponent_ng_container_4_ul_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function SidebarComponent_ng_container_4_ul_1_li_3_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const item_r7 = restoredCtx.$implicit; const a_r8 = restoredCtx.index; const ctx_r10 = i0.ɵɵnextContext(2); const data_r2 = ctx_r10.$implicit; const i_r3 = ctx_r10.index; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.navigateDevice(data_r2, i_r3, item_r7, a_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const a_r8 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzSelected", ctx_r6.subDeviceIndex === a_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r7.name, " ");
} }
function SidebarComponent_ng_container_4_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 4)(1, "li", 10);
    i0.ɵɵlistener("nzOpenChange", function SidebarComponent_ng_container_4_ul_1_Template_li_nzOpenChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const data_r2 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(data_r2.show = $event); });
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, SidebarComponent_ng_container_4_ul_1_li_3_Template, 2, 2, "li", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nzTitle", data_r2.name);
    i0.ɵɵproperty("nzOpen", data_r2.show);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r2 == null ? null : data_r2.subs);
} }
function SidebarComponent_ng_container_4_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function SidebarComponent_ng_container_4_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); const data_r2 = ctx_r17.$implicit; const i_r3 = ctx_r17.index; const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.navigateDevice(data_r2, i_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    const i_r3 = ctx_r19.index;
    const data_r2 = ctx_r19.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSelected", ctx_r5.indexRegion === i_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r2.name, " ");
} }
function SidebarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SidebarComponent_ng_container_4_ul_1_Template, 4, 3, "ul", 8);
    i0.ɵɵtemplate(2, SidebarComponent_ng_container_4_li_2_Template, 2, 2, "li", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r2 == null ? null : data_r2.subs == null ? null : data_r2.subs.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r2 == null ? null : data_r2.subs) === null);
} }
function SidebarComponent_ng_container_8_ul_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function SidebarComponent_ng_container_8_ul_1_li_3_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r29); const item_r25 = restoredCtx.$implicit; const i_r26 = restoredCtx.index; const ctx_r28 = i0.ɵɵnextContext(2); const data_r20 = ctx_r28.$implicit; const index_r21 = ctx_r28.index; const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.navigateFolder(data_r20, index_r21, item_r25, i_r26)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzSelected", ctx_r24.subFolderIndex === i_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r25.name, " ");
} }
function SidebarComponent_ng_container_8_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 4)(1, "li", 10);
    i0.ɵɵlistener("nzOpenChange", function SidebarComponent_ng_container_8_ul_1_Template_li_nzOpenChange_1_listener($event) { i0.ɵɵrestoreView(_r32); const data_r20 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(data_r20.show = $event); });
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, SidebarComponent_ng_container_8_ul_1_li_3_Template, 2, 2, "li", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nzTitle", data_r20.name);
    i0.ɵɵproperty("nzOpen", data_r20.show);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", data_r20 == null ? null : data_r20.subs);
} }
function SidebarComponent_ng_container_8_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function SidebarComponent_ng_container_8_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(); const data_r20 = ctx_r35.$implicit; const index_r21 = ctx_r35.index; const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.navigateFolder(data_r20, index_r21)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    const index_r21 = ctx_r37.index;
    const data_r20 = ctx_r37.$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSelected", ctx_r23.indexPer === index_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r20.name, " ");
} }
function SidebarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SidebarComponent_ng_container_8_ul_1_Template, 4, 3, "ul", 8);
    i0.ɵɵtemplate(2, SidebarComponent_ng_container_8_li_2_Template, 2, 2, "li", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r20 == null ? null : data_r20.subs == null ? null : data_r20.subs.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (data_r20 == null ? null : data_r20.subs) === null);
} }
class SidebarComponent {
    constructor(router, apiUserService, route, loadingService) {
        this.router = router;
        this.apiUserService = apiUserService;
        this.route = route;
        this.loadingService = loadingService;
        this.ROUTE_DEVICE = 'adv/device';
        this.ROUTE_FOLDER = 'adv/file';
        this.indexSlideShow = false;
        this.indexPer = 0;
        this.indexRegion = 0;
        this.subDeviceIndex = 0;
        this.subFolderIndex = -1;
        this.openDevice = -1;
        this.checkOpenReloadFile = false;
        this.checkOpenReloadDevice = true;
        this.titleDevice = 'Thiết bị';
        this.titleFolder = 'Tệp';
        this.titleSlide = 'Trình chiếu';
        this.createSlideTitle = 'Tạo lịch trình chiếu';
    }
    ngOnInit() {
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
    navigateOriginalDevice() {
        if (this.regions?.length <= 0) {
            const obj = [this.titleDevice];
            this.apiUserService.sendData(obj);
            this.router.navigate([this.ROUTE_DEVICE]);
        }
    }
    navigateOriginalFile() {
        if (this.folder?.length <= 0) {
            const obj = [this.titleDevice];
            this.apiUserService.sendData(obj);
            this.router.navigate([this.ROUTE_FOLDER]);
        }
    }
    navigateDevice(data, i, item, index) {
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
        }
        else {
            const obj = [this.titleDevice, data.name];
            this.apiUserService.sendData(obj);
            this.router.navigate([this.ROUTE_DEVICE], {
                queryParams: { regionId: data.id },
            });
        }
    }
    navigateFolder(data, i, item, index) {
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
        }
        else {
            const obj = [this.titleFolder, data.name];
            this.apiUserService.sendData(obj);
            this.router.navigate([this.ROUTE_FOLDER], {
                queryParams: { folderId: data.id },
            });
        }
    }
    getListFolder() {
        this.apiUserService
            .getListFolder()
            .pipe(finalize(() => {
            this.loadingService.hideLoading();
        }))
            .subscribe((res) => {
            this.folder = res.data;
            const url = this.router.url;
            if (url.includes(this.ROUTE_FOLDER)) {
                this.checkOpenReloadFile = true;
                this.checkOpenReloadDevice = false;
                this.route.queryParams.subscribe((params) => {
                    this.checkNavigate(this.folder, params.folderId);
                });
            }
            else {
                if (url.includes('/adv/presentation-slide')) {
                    this.checkHiddenNotPresentation();
                    this.activeSlideShow();
                }
                else if (url.includes('/adv/create-presentation-slide')) {
                    this.checkActiveSlideShow();
                    this.checkHiddenNotPresentation();
                    const obj = [this.titleSlide, this.createSlideTitle];
                    this.apiUserService.sendData(obj);
                }
            }
        });
    }
    checkHiddenNotPresentation() {
        this.checkOpenReloadFile = false;
        this.checkOpenReloadDevice = false;
    }
    getListRegion() {
        this.apiUserService
            .getListRegion()
            .pipe(finalize(() => {
            this.loadingService.hideLoading();
        }))
            .subscribe((res) => {
            this.regions = res.data;
            this.regions = res.data.map((item) => {
                return { ...item };
            });
            if (this.regions.length === 1) {
                this.navigateDevice(this.regions[0]);
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const check = JSON.parse(localStorage.getItem('navigate'));
            if (check) {
                if (this.regions.length > 0)
                    this.navigateDevice(this.regions[0]);
                const url = this.router.url;
                if (url.includes(this.ROUTE_DEVICE)) {
                    this.checkOpenReloadFile = false;
                    this.checkOpenReloadDevice = true;
                    this.route.queryParams.subscribe((params) => {
                        this.checkNavigate(this.regions, params.regionId);
                    });
                }
                localStorage.removeItem('navigate');
            }
            else {
                const url = this.router.url;
                if (url.includes(this.ROUTE_DEVICE)) {
                    this.checkOpenReloadFile = false;
                    this.checkOpenReloadDevice = true;
                    this.route.queryParams.subscribe((params) => {
                        this.checkNavigate(this.regions, params.regionId);
                    });
                }
            }
        });
    }
    activeSlideShow() {
        this.checkActiveSlideShow();
        const obj = [this.titleSlide];
        this.apiUserService.sendData(obj);
        this.router.navigate(['adv/presentation-slide']);
    }
    checkActiveSlideShow() {
        this.subFolderIndex = -1;
        this.subDeviceIndex = -1;
        this.indexSlideShow = true;
        this.indexPer = -1;
        this.indexRegion = -1;
    }
    checkNavigate(data, id) {
        const url = this.router.url;
        let found = false;
        for (let i = 0; i < data?.length; i++) {
            if (data[i].id === id) {
                found = true;
                if (url.includes(this.ROUTE_DEVICE)) {
                    this.subDeviceIndex = -1;
                    this.navigateDevice(data[i], i);
                }
                else if (url.includes(this.ROUTE_FOLDER)) {
                    this.navigateFolder(data[i], i);
                }
                break;
            }
            if (data[i]?.subs) {
                for (let j = 0; j < data[i].subs.length; j++) {
                    if (data[i].subs[j].id === id) {
                        found = true;
                        if (url.includes(this.ROUTE_DEVICE)) {
                            this.regions = this.regions.map((item, index) => {
                                const showValue = index === i ? true : false;
                                return { ...item, show: showValue };
                            });
                            this.openDevice = i;
                            this.navigateDevice(data[i], i, data[i].subs[j], j);
                        }
                        else if (url.includes(this.ROUTE_FOLDER)) {
                            this.folder = this.folder.map((item, index) => {
                                const showValue = index === i ? true : false;
                                return { ...item, show: showValue };
                            });
                            this.navigateFolder(data[i], i, data[i].subs[j], j);
                        }
                        break;
                    }
                }
            }
            if (found)
                break;
        }
    }
    static { this.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.ApiUserService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i3.LoadingService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["hub-sidebar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 5, consts: [["nzWidth", "256px", "nzTheme", "light", 1, "ant-layout-sider", "ant-layout-sider-light"], ["nz-menu", "", "nzMode", "inline"], ["nz-submenu", "", "nzIcon", "mobile", "nzTitle", "Thi\u1EBFt b\u1ECB", 3, "nzOpen", "nzOpenChange", "click"], [4, "ngFor", "ngForOf"], ["nz-menu", "", "nzMode", "inline", 1, "sider-menu"], ["nz-submenu", "", "nzIcon", "folder", "nzTitle", "T\u1EC7p", 3, "nzOpen", "nzOpenChange", "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "video-camera-add", "nzTheme", "outline"], ["nz-menu", "", "nzMode", "inline", "class", "sider-menu", 4, "ngIf"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngIf"], ["nz-submenu", "", 3, "nzTitle", "nzOpen", "nzOpenChange"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-sider", 0)(1, "ul", 1)(2, "li", 2);
            i0.ɵɵlistener("nzOpenChange", function SidebarComponent_Template_li_nzOpenChange_2_listener($event) { return ctx.checkOpenReloadDevice = $event; })("click", function SidebarComponent_Template_li_click_2_listener() { return ctx.navigateOriginalDevice(); });
            i0.ɵɵelementStart(3, "ul");
            i0.ɵɵtemplate(4, SidebarComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(5, "ul", 4)(6, "li", 5);
            i0.ɵɵlistener("nzOpenChange", function SidebarComponent_Template_li_nzOpenChange_6_listener($event) { return ctx.checkOpenReloadFile = $event; })("click", function SidebarComponent_Template_li_click_6_listener() { return ctx.navigateOriginalFile(); });
            i0.ɵɵelementStart(7, "ul");
            i0.ɵɵtemplate(8, SidebarComponent_ng_container_8_Template, 3, 2, "ng-container", 3);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "ul", 1)(10, "li", 6);
            i0.ɵɵlistener("click", function SidebarComponent_Template_li_click_10_listener() { return ctx.activeSlideShow(); });
            i0.ɵɵelement(11, "span", 7);
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "Tr\u00ECnh chi\u1EBFu");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzOpen", ctx.checkOpenReloadDevice);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.regions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzOpen", ctx.checkOpenReloadFile);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.folder);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSelected", ctx.indexSlideShow);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, NzLayoutModule, i5.NzSiderComponent, NzMenuModule, i6.NzMenuDirective, i6.NzMenuItemDirective, i6.NzSubMenuComponent, NzIconModule, i7.NzIconDirective, RouterModule], styles: ["@import\"node_modules/ng-zorro-antd/ng-zorro-antd.min.css\";[_nghost-%COMP%]{background:white}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:16px}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;height:2px;background:rgba(0,0,0,.06)}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:first-child{width:21px}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:last-child{flex:1}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;color:var(--character-secondary-45, rgba(0, 0, 0, .45));font-size:13px;font-weight:400;line-height:24px}  .ant-menu-submenu-selected{color:#000!important}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'hub-sidebar', standalone: true, imports: [
                    CommonModule,
                    NzLayoutModule,
                    NzMenuModule,
                    NzIconModule,
                    RouterModule,
                ], template: "<nz-sider\n  class=\"ant-layout-sider ant-layout-sider-light\"\n  nzWidth=\"256px\"\n  nzTheme=\"light\"\n>\n  <ul nz-menu nzMode=\"inline\">\n    <li\n      nz-submenu\n      nzIcon=\"mobile\"\n      [(nzOpen)]=\"checkOpenReloadDevice\"\n      nzTitle=\"Thi\u1EBFt b\u1ECB\"\n      (click)=\"navigateOriginalDevice()\"\n    >\n      <ul>\n        <ng-container *ngFor=\"let data of regions; let i = index\">\n          <ul\n            nz-menu\n            nzMode=\"inline\"\n            class=\"sider-menu\"\n            *ngIf=\"data?.subs?.length! > 0\"\n          >\n            <li nz-submenu nzTitle=\"{{ data.name }}\" [(nzOpen)]=\"data.show\">\n              <ul>\n                <li\n                  nz-menu-item\n                  *ngFor=\"let item of data?.subs; let a = index\"\n                  (click)=\"navigateDevice(data, i, item, a)\"\n                  [nzSelected]=\"subDeviceIndex === a\"\n                >\n                  {{ item.name }}\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <li\n            *ngIf=\"data?.subs === null\"\n            nz-menu-item\n            (click)=\"navigateDevice(data, i)\"\n            [nzSelected]=\"indexRegion === i\"\n          >\n            {{ data.name }}\n          </li>\n        </ng-container>\n      </ul>\n    </li>\n  </ul>\n  <ul nz-menu nzMode=\"inline\" class=\"sider-menu\">\n    <li\n      nz-submenu\n      nzIcon=\"folder\"\n      nzTitle=\"T\u1EC7p\"\n      [(nzOpen)]=\"checkOpenReloadFile\"\n      (click)=\"navigateOriginalFile()\"\n    >\n      <ul>\n        <ng-container *ngFor=\"let data of folder; let index = index\">\n          <ul\n            nz-menu\n            nzMode=\"inline\"\n            class=\"sider-menu\"\n            *ngIf=\"data?.subs?.length! > 0\"\n          >\n            <li nz-submenu nzTitle=\"{{ data.name }}\" [(nzOpen)]=\"data.show\">\n              <ul>\n                <li\n                  nz-menu-item\n                  *ngFor=\"let item of data?.subs; let i = index\"\n                  (click)=\"navigateFolder(data, index, item, i)\"\n                  [nzSelected]=\"subFolderIndex === i\"\n                >\n                  {{ item.name }}\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <li\n            *ngIf=\"data?.subs === null\"\n            nz-menu-item\n            (click)=\"navigateFolder(data, index)\"\n            [nzSelected]=\"indexPer === index\"\n          >\n            {{ data.name }}\n          </li>\n        </ng-container>\n      </ul>\n    </li>\n  </ul>\n  <ul nz-menu nzMode=\"inline\">\n    <li nz-menu-item [nzSelected]=\"indexSlideShow\" (click)=\"activeSlideShow()\">\n      <span nz-icon nzType=\"video-camera-add\" nzTheme=\"outline\"></span>\n      <span>Tr\u00ECnh chi\u1EBFu</span>\n    </li>\n  </ul>\n</nz-sider>\n", styles: ["@import\"node_modules/ng-zorro-antd/ng-zorro-antd.min.css\";:host{background:white}:host nz-sider{display:block}:host nz-sider .title-sidebar{margin-top:8px;margin-bottom:8px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:16px}:host nz-sider .title-sidebar .line{display:block;height:2px;background:rgba(0,0,0,.06)}:host nz-sider .title-sidebar .line:first-child{width:21px}:host nz-sider .title-sidebar .line:last-child{flex:1}:host nz-sider .title-sidebar .title-text{display:inline-block;white-space:nowrap;color:var(--character-secondary-45, rgba(0, 0, 0, .45));font-size:13px;font-weight:400;line-height:24px}::ng-deep .ant-menu-submenu-selected{color:#000!important}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i2.ApiUserService }, { type: i1.ActivatedRoute }, { type: i3.LoadingService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarComponent };
//# sourceMappingURL=hub-center-hub-feature-sidebar.mjs.map
