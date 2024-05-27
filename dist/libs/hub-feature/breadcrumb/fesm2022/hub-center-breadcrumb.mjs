import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/breadcrumb';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import * as i1 from '@hub-center/hub-service/api-user';

function BreadcrumbComponent_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-breadcrumb-item");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1);
} }
class BreadcrumbComponent {
    constructor(apiUserService) {
        this.apiUserService = apiUserService;
        this.breadCrumbData = [];
    }
    ngOnInit() {
        this.apiUserService.breadCrumb$.subscribe((data) => {
            this.breadCrumbData = data;
        });
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(i0.ɵɵdirectiveInject(i1.ApiUserService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["hub-breadcrumb"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-breadcrumb");
            i0.ɵɵtemplate(1, BreadcrumbComponent_nz_breadcrumb_item_1_Template, 2, 1, "nz-breadcrumb-item", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.breadCrumbData);
        } }, dependencies: [CommonModule, i2.NgForOf, NzBreadCrumbModule, i3.NzBreadCrumbComponent, i3.NzBreadCrumbItemComponent], styles: ["nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'hub-breadcrumb', standalone: true, imports: [CommonModule, NzBreadCrumbModule], template: "<nz-breadcrumb>\n  <nz-breadcrumb-item *ngFor=\"let item of breadCrumbData\">{{\n    item\n  }}</nz-breadcrumb-item>\n</nz-breadcrumb>\n", styles: ["nz-breadcrumb{margin:16px 0}\n"] }]
    }], function () { return [{ type: i1.ApiUserService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent };
//# sourceMappingURL=hub-center-breadcrumb.mjs.map
