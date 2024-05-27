import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { finalize } from 'rxjs';
import { LoadingService } from '@hub-center/loading';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@hub-center/hub-service/api-user";
import * as i3 from "@hub-center/loading";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/layout";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/icon";
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
export class SidebarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1mZWF0dXJlL3NpZGViYXIvc3JjL2xpYi9zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLWZlYXR1cmUvc2lkZWJhci9zcmMvbGliL3NpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztJQ2VyQyw2QkFLQztJQUZDLDRXQUFTLGVBQUEsbURBQWdDLENBQUEsSUFBQztJQUcxQyxZQUNGO0lBQUEsaUJBQUs7Ozs7O0lBSEgsMkRBQW1DO0lBRW5DLGVBQ0Y7SUFERSw2Q0FDRjs7OztJQWZOLDZCQUtDLGFBQUE7SUFDMEMsdU1BQVkscUNBQzVELElBRHNFO0lBQzdELDBCQUFJO0lBQ0Ysb0ZBT0s7SUFDUCxpQkFBSyxFQUFBLEVBQUE7OztJQVZRLGVBQXlCO0lBQXpCLGlEQUF5QjtJQUFDLHFDQUFzQjtJQUl4QyxlQUFlO0lB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QkFDRjthQUNGO1lBRUQsSUFBSSxLQUFLO2dCQUFFLE1BQU07U0FDbEI7SUFDSCxDQUFDO2lGQW5QVSxnQkFBZ0I7b0VBQWhCLGdCQUFnQjtZQ3ZCN0IsbUNBSUMsWUFBQSxZQUFBO1lBS0ssbUpBQWtDLDRFQUV6Qiw0QkFBd0IsSUFGQztZQUlsQywwQkFBSTtZQUNGLG1GQTRCZTtZQUNqQixpQkFBSyxFQUFBLEVBQUE7WUFHVCw2QkFBK0MsWUFBQTtZQUszQyxpSkFBZ0MsNEVBQ3ZCLDBCQUFzQixJQURDO1lBR2hDLDBCQUFJO1lBQ0YsbUZBNEJlO1lBQ2pCLGlCQUFLLEVBQUEsRUFBQTtZQUdULDZCQUE0QixhQUFBO1lBQ3FCLDBGQUFTLHFCQUFpQixJQUFDO1lBQ3hFLDJCQUFpRTtZQUNqRSw2QkFBTTtZQUFBLHNDQUFXO1lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7O1lBakZ4QixlQUFrQztZQUFsQyxrREFBa0M7WUFLRCxlQUFZO1lBQVoscUNBQVk7WUFxQzdDLGVBQWdDO1lBQWhDLGdEQUFnQztZQUlDLGVBQVc7WUFBWCxvQ0FBVztZQWlDN0IsZUFBNkI7WUFBN0IsK0NBQTZCOzRCRDFFOUMsWUFBWSx1QkFDWixjQUFjLHVCQUNkLFlBQVkscUVBQ1osWUFBWSxzQkFDWixZQUFZOzt1RkFLSCxnQkFBZ0I7Y0FiNUIsU0FBUzsyQkFDRSxhQUFhLGNBQ1gsSUFBSSxXQUNQO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpMYXlvdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2xheW91dCc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBBcGlVc2VyU2VydmljZSB9IGZyb20gJ0BodWItY2VudGVyL2h1Yi1zZXJ2aWNlL2FwaS11c2VyJztcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJ0BodWItY2VudGVyL2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodWItc2lkZWJhcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpMYXlvdXRNb2R1bGUsXG4gICAgTnpNZW51TW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgUk9VVEVfREVWSUNFID0gJ2Fkdi9kZXZpY2UnO1xuICBST1VURV9GT0xERVIgPSAnYWR2L2ZpbGUnO1xuICBpbmRleFNsaWRlU2hvdyA9IGZhbHNlO1xuICBpbmRleFBlciA9IDA7XG4gIGluZGV4UmVnaW9uID0gMDtcbiAgc3ViRGV2aWNlSW5kZXggPSAwO1xuICBzdWJGb2xkZXJJbmRleCA9IC0xO1xuICBvcGVuRGV2aWNlID0gLTE7XG4gIGZvbGRlcjogYW55O1xuICByZWdpb25zOiBhbnk7XG4gIGNoZWNrT3BlblJlbG9hZEZpbGUgPSBmYWxzZTtcbiAgY2hlY2tPcGVuUmVsb2FkRGV2aWNlID0gdHJ1ZTtcbiAgdGl0bGVEZXZpY2UgPSAnVGhp4bq/dCBi4buLJztcbiAgdGl0bGVGb2xkZXIgPSAnVOG7h3AnO1xuICB0aXRsZVNsaWRlID0gJ1Ryw6xuaCBjaGnhur91JztcbiAgY3JlYXRlU2xpZGVUaXRsZSA9ICdU4bqhbyBs4buLY2ggdHLDrG5oIGNoaeG6v3UnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhcGlVc2VyU2VydmljZTogQXBpVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0TGlzdFJlZ2lvbigpO1xuICAgIHRoaXMuZ2V0TGlzdEZvbGRlcigpO1xuXG4gICAgdGhpcy5hcGlVc2VyU2VydmljZS5hZGRSZWdpb24kLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRMaXN0UmVnaW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hcGlVc2VyU2VydmljZS5hZGRGb2xkZXIkLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRMaXN0Rm9sZGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuYXZpZ2F0ZU9yaWdpbmFsRGV2aWNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZ2lvbnM/Lmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zdCBvYmogPSBbdGhpcy50aXRsZURldmljZV07XG4gICAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlLnNlbmREYXRhKG9iaik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ST1VURV9ERVZJQ0VdKTtcbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZU9yaWdpbmFsRmlsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb2xkZXI/Lmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zdCBvYmogPSBbdGhpcy50aXRsZURldmljZV07XG4gICAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlLnNlbmREYXRhKG9iaik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ST1VURV9GT0xERVJdKTtcbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZURldmljZShkYXRhOiBhbnksIGk/OiBudW1iZXIsIGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFJlZ2lvbiA9IGkgPz8gMDtcbiAgICB0aGlzLmluZGV4UGVyID0gLTE7XG4gICAgdGhpcy5pbmRleFNsaWRlU2hvdyA9IGZhbHNlO1xuICAgIHRoaXMuc3ViRm9sZGVySW5kZXggPSAtMTtcbiAgICBpZiAoZGF0YT8uc3Vicz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb2JqID0gW1xuICAgICAgICB0aGlzLnRpdGxlRGV2aWNlLFxuICAgICAgICBkYXRhLm5hbWUsXG4gICAgICAgIGl0ZW0gPyBpdGVtLm5hbWUgOiBkYXRhPy5zdWJzWzBdPy5uYW1lLFxuICAgICAgXTtcbiAgICAgIHRoaXMuc3ViRGV2aWNlSW5kZXggPSBpbmRleCA/PyAwO1xuXG4gICAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlLnNlbmREYXRhKG9iaik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ST1VURV9ERVZJQ0VdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHJlZ2lvbklkOiBpdGVtID8gaXRlbS5pZCA6IGRhdGE/LnN1YnNbMF0/LmlkIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2JqID0gW3RoaXMudGl0bGVEZXZpY2UsIGRhdGEubmFtZV07XG4gICAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlLnNlbmREYXRhKG9iaik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ST1VURV9ERVZJQ0VdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHJlZ2lvbklkOiBkYXRhLmlkIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZUZvbGRlcihkYXRhOiBhbnksIGk/OiBudW1iZXIsIGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFBlciA9IGkgPz8gMDtcbiAgICB0aGlzLmluZGV4U2xpZGVTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleFJlZ2lvbiA9IC0xO1xuICAgIHRoaXMuc3ViRGV2aWNlSW5kZXggPSAtMTtcbiAgICBpZiAoZGF0YT8uc3Vicz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb2JqID0gW1xuICAgICAgICB0aGlzLnRpdGxlRm9sZGVyLFxuICAgICAgICBkYXRhLm5hbWUsXG4gICAgICAgIGl0ZW0gPyBpdGVtLm5hbWUgOiBkYXRhPy5zdWJzWzBdPy5uYW1lLFxuICAgICAgXTtcbiAgICAgIHRoaXMuYXBpVXNlclNlcnZpY2Uuc2VuZERhdGEob2JqKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLlJPVVRFX0ZPTERFUl0sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHsgZm9sZGVySWQ6IGl0ZW0gPyBpdGVtLmlkIDogZGF0YT8uc3Vic1swXT8uaWQgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJGb2xkZXJJbmRleCA9IGluZGV4ID8/IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9iaiA9IFt0aGlzLnRpdGxlRm9sZGVyLCBkYXRhLm5hbWVdO1xuICAgICAgdGhpcy5hcGlVc2VyU2VydmljZS5zZW5kRGF0YShvYmopO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuUk9VVEVfRk9MREVSXSwge1xuICAgICAgICBxdWVyeVBhcmFtczogeyBmb2xkZXJJZDogZGF0YS5pZCB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGlzdEZvbGRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlXG4gICAgICAuZ2V0TGlzdEZvbGRlcigpXG4gICAgICAucGlwZShcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZm9sZGVyID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcyh0aGlzLlJPVVRFX0ZPTERFUikpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrT3BlblJlbG9hZEZpbGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hlY2tPcGVuUmVsb2FkRGV2aWNlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTmF2aWdhdGUodGhpcy5mb2xkZXIsIHBhcmFtcy5mb2xkZXJJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnL2Fkdi9wcmVzZW50YXRpb24tc2xpZGUnKSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0hpZGRlbk5vdFByZXNlbnRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZVNob3coKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcygnL2Fkdi9jcmVhdGUtcHJlc2VudGF0aW9uLXNsaWRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBY3RpdmVTbGlkZVNob3coKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaWRkZW5Ob3RQcmVzZW50YXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IFt0aGlzLnRpdGxlU2xpZGUsIHRoaXMuY3JlYXRlU2xpZGVUaXRsZV07XG4gICAgICAgICAgICB0aGlzLmFwaVVzZXJTZXJ2aWNlLnNlbmREYXRhKG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoZWNrSGlkZGVuTm90UHJlc2VudGF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPcGVuUmVsb2FkRmlsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hlY2tPcGVuUmVsb2FkRGV2aWNlID0gZmFsc2U7XG4gIH1cblxuICBnZXRMaXN0UmVnaW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYXBpVXNlclNlcnZpY2VcbiAgICAgIC5nZXRMaXN0UmVnaW9uKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5oaWRlTG9hZGluZygpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yZWdpb25zID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMucmVnaW9ucyA9IHJlcy5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5yZWdpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGVEZXZpY2UodGhpcy5yZWdpb25zWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICBjb25zdCBjaGVjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hdmlnYXRlJykhKTtcblxuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICBpZiAodGhpcy5yZWdpb25zLmxlbmd0aCA+IDApIHRoaXMubmF2aWdhdGVEZXZpY2UodGhpcy5yZWdpb25zWzBdKTtcbiAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyh0aGlzLlJPVVRFX0RFVklDRSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPcGVuUmVsb2FkRmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja09wZW5SZWxvYWREZXZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tOYXZpZ2F0ZSh0aGlzLnJlZ2lvbnMsIHBhcmFtcy5yZWdpb25JZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hdmlnYXRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXModGhpcy5ST1VURV9ERVZJQ0UpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrT3BlblJlbG9hZEZpbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPcGVuUmVsb2FkRGV2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrTmF2aWdhdGUodGhpcy5yZWdpb25zLCBwYXJhbXMucmVnaW9uSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGFjdGl2ZVNsaWRlU2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQWN0aXZlU2xpZGVTaG93KCk7XG4gICAgY29uc3Qgb2JqID0gW3RoaXMudGl0bGVTbGlkZV07XG4gICAgdGhpcy5hcGlVc2VyU2VydmljZS5zZW5kRGF0YShvYmopO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWR2L3ByZXNlbnRhdGlvbi1zbGlkZSddKTtcbiAgfVxuXG4gIGNoZWNrQWN0aXZlU2xpZGVTaG93KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViRm9sZGVySW5kZXggPSAtMTtcbiAgICB0aGlzLnN1YkRldmljZUluZGV4ID0gLTE7XG4gICAgdGhpcy5pbmRleFNsaWRlU2hvdyA9IHRydWU7XG4gICAgdGhpcy5pbmRleFBlciA9IC0xO1xuICAgIHRoaXMuaW5kZXhSZWdpb24gPSAtMTtcbiAgfVxuXG4gIGNoZWNrTmF2aWdhdGUoZGF0YT86IGFueSwgaWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhPy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRhdGFbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcyh0aGlzLlJPVVRFX0RFVklDRSkpIHtcbiAgICAgICAgICB0aGlzLnN1YkRldmljZUluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZURldmljZShkYXRhW2ldLCBpKTtcbiAgICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXModGhpcy5ST1VURV9GT0xERVIpKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZUZvbGRlcihkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbaV0/LnN1YnMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLnN1YnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGF0YVtpXS5zdWJzW2pdLmlkID09PSBpZCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyh0aGlzLlJPVVRFX0RFVklDRSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWdpb25zID0gdGhpcy5yZWdpb25zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1ZhbHVlID0gaW5kZXggPT09IGkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgc2hvdzogc2hvd1ZhbHVlIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLm9wZW5EZXZpY2UgPSBpO1xuICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlRGV2aWNlKGRhdGFbaV0sIGksIGRhdGFbaV0uc3Vic1tqXSwgaik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyh0aGlzLlJPVVRFX0ZPTERFUikpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2xkZXIgPSB0aGlzLmZvbGRlci5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dWYWx1ZSA9IGluZGV4ID09PSBpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHNob3c6IHNob3dWYWx1ZSB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUZvbGRlcihkYXRhW2ldLCBpLCBkYXRhW2ldLnN1YnNbal0sIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCI8bnotc2lkZXJcbiAgY2xhc3M9XCJhbnQtbGF5b3V0LXNpZGVyIGFudC1sYXlvdXQtc2lkZXItbGlnaHRcIlxuICBueldpZHRoPVwiMjU2cHhcIlxuICBuelRoZW1lPVwibGlnaHRcIlxuPlxuICA8dWwgbnotbWVudSBuek1vZGU9XCJpbmxpbmVcIj5cbiAgICA8bGlcbiAgICAgIG56LXN1Ym1lbnVcbiAgICAgIG56SWNvbj1cIm1vYmlsZVwiXG4gICAgICBbKG56T3BlbildPVwiY2hlY2tPcGVuUmVsb2FkRGV2aWNlXCJcbiAgICAgIG56VGl0bGU9XCJUaGnhur90IGLhu4tcIlxuICAgICAgKGNsaWNrKT1cIm5hdmlnYXRlT3JpZ2luYWxEZXZpY2UoKVwiXG4gICAgPlxuICAgICAgPHVsPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIHJlZ2lvbnM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIG56LW1lbnVcbiAgICAgICAgICAgIG56TW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICBjbGFzcz1cInNpZGVyLW1lbnVcIlxuICAgICAgICAgICAgKm5nSWY9XCJkYXRhPy5zdWJzPy5sZW5ndGghID4gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxpIG56LXN1Ym1lbnUgbnpUaXRsZT1cInt7IGRhdGEubmFtZSB9fVwiIFsobnpPcGVuKV09XCJkYXRhLnNob3dcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgbnotbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhPy5zdWJzOyBsZXQgYSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuYXZpZ2F0ZURldmljZShkYXRhLCBpLCBpdGVtLCBhKVwiXG4gICAgICAgICAgICAgICAgICBbbnpTZWxlY3RlZF09XCJzdWJEZXZpY2VJbmRleCA9PT0gYVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiZGF0YT8uc3VicyA9PT0gbnVsbFwiXG4gICAgICAgICAgICBuei1tZW51LWl0ZW1cbiAgICAgICAgICAgIChjbGljayk9XCJuYXZpZ2F0ZURldmljZShkYXRhLCBpKVwiXG4gICAgICAgICAgICBbbnpTZWxlY3RlZF09XCJpbmRleFJlZ2lvbiA9PT0gaVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgZGF0YS5uYW1lIH19XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIDx1bCBuei1tZW51IG56TW9kZT1cImlubGluZVwiIGNsYXNzPVwic2lkZXItbWVudVwiPlxuICAgIDxsaVxuICAgICAgbnotc3VibWVudVxuICAgICAgbnpJY29uPVwiZm9sZGVyXCJcbiAgICAgIG56VGl0bGU9XCJU4buHcFwiXG4gICAgICBbKG56T3BlbildPVwiY2hlY2tPcGVuUmVsb2FkRmlsZVwiXG4gICAgICAoY2xpY2spPVwibmF2aWdhdGVPcmlnaW5hbEZpbGUoKVwiXG4gICAgPlxuICAgICAgPHVsPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGZvbGRlcjsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIG56LW1lbnVcbiAgICAgICAgICAgIG56TW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICBjbGFzcz1cInNpZGVyLW1lbnVcIlxuICAgICAgICAgICAgKm5nSWY9XCJkYXRhPy5zdWJzPy5sZW5ndGghID4gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxpIG56LXN1Ym1lbnUgbnpUaXRsZT1cInt7IGRhdGEubmFtZSB9fVwiIFsobnpPcGVuKV09XCJkYXRhLnNob3dcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgbnotbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhPy5zdWJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuYXZpZ2F0ZUZvbGRlcihkYXRhLCBpbmRleCwgaXRlbSwgaSlcIlxuICAgICAgICAgICAgICAgICAgW256U2VsZWN0ZWRdPVwic3ViRm9sZGVySW5kZXggPT09IGlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdJZj1cImRhdGE/LnN1YnMgPT09IG51bGxcIlxuICAgICAgICAgICAgbnotbWVudS1pdGVtXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVGb2xkZXIoZGF0YSwgaW5kZXgpXCJcbiAgICAgICAgICAgIFtuelNlbGVjdGVkXT1cImluZGV4UGVyID09PSBpbmRleFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgZGF0YS5uYW1lIH19XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIDx1bCBuei1tZW51IG56TW9kZT1cImlubGluZVwiPlxuICAgIDxsaSBuei1tZW51LWl0ZW0gW256U2VsZWN0ZWRdPVwiaW5kZXhTbGlkZVNob3dcIiAoY2xpY2spPVwiYWN0aXZlU2xpZGVTaG93KClcIj5cbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwidmlkZW8tY2FtZXJhLWFkZFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9zcGFuPlxuICAgICAgPHNwYW4+VHLDrG5oIGNoaeG6v3U8L3NwYW4+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvbnotc2lkZXI+XG4iXX0=