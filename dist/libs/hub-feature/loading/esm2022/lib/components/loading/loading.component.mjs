import { Component, Input } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/loading.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
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
export class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadingService.isLoading.subscribe((res) => {
            this.isLoading = res;
        });
    }
    static { this.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(i0.ɵɵdirectiveInject(i1.LoadingService)); }; }
            i0.ɵɵtemplate(0, LoadingComponent_div_0_Template, 9, 0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading);
        } }, dependencies: [i2.NgIf, i3.NzIconDirective], styles: [".loading[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1000;background-color:#80808066;display:flex;flex-direction:column;justify-content:center;align-items:center}.loading[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;height:50px;width:50px;padding:10px}.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:100px;height:100px;position:absolute;inset:0;margin:auto;color:#1890ff}[_nghost-%COMP%]     .spinner .anticon-spin{width:100px;height:100px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingComponent, [{
        type: Component,
    }], function () { return [{ type: i1.LoadingService }]; }, { isLoading: [{
            type: Input
        }] }); })();