import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { BehaviorSubject } from 'rxjs';
import * as i3 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

class LoadingService {
    constructor() {
        this.isLoadingSubject = new BehaviorSubject(false);
        this.isLoading = this.isLoadingSubject.asObservable();
        this.isShowingLoading = false;
        this.isLoading.subscribe((res) => {
            this.isShowingLoading = res;
        });
    }
    showLoading() {
        this.isLoadingSubject.next(true);
    }
    hideLoading() {
        this.isLoadingSubject.next(false);
    }
    static { this.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 3);
    i0.ɵɵelement(3, "rect", 4);
    i0.ɵɵelementStart(4, "defs")(5, "pattern", 5);
    i0.ɵɵelement(6, "use", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "image", 7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(8, "span", 8);
    i0.ɵɵelementEnd();
} }
class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadingService.isLoading.subscribe((res) => {
            this.isLoading = res;
        });
    }
    static { this.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(i0.ɵɵdirectiveInject(LoadingService)); }; }
            i0.ɵɵtemplate(0, LoadingComponent_div_0_Template, 9, 0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading);
        } }, dependencies: [i2.NgIf, i3.NzIconDirective], styles: [".loading[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1000;background-color:#80808066;display:flex;flex-direction:column;justify-content:center;align-items:center}.loading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;height:50px;width:50px;padding:10px}.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:100px;height:100px;position:absolute;inset:0;margin:auto;color:#1890ff}[_nghost-%COMP%]     .spinner .anticon-spin{width:100px;height:100px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingComponent, [{
        type: Component,
    }], function () { return [{ type: LoadingService }]; }, { isLoading: [{
            type: Input
        }] }); })();

class HubFeatureLoadingModule {
    static { this.ɵfac = function HubFeatureLoadingModule_Factory(t) { return new (t || HubFeatureLoadingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HubFeatureLoadingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, NzSpinModule, NzIconModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HubFeatureLoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSpinModule, NzIconModule],
                declarations: [LoadingComponent],
                exports: [LoadingComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HubFeatureLoadingModule, { declarations: [LoadingComponent], imports: [CommonModule, NzSpinModule, NzIconModule], exports: [LoadingComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { HubFeatureLoadingModule, LoadingComponent, LoadingService };
//# sourceMappingURL=hub-center-loading.mjs.map