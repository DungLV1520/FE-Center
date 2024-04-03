import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from 'ng-zorro-antd/breadcrumb';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

class BreadcrumbComponent {
    static { this.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["hub-breadcrumb"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-breadcrumb")(1, "nz-breadcrumb-item");
            i0.ɵɵtext(2, "ADV CMS");
            i0.ɵɵelementEnd()();
        } }, dependencies: [CommonModule, NzBreadCrumbModule, i1.NzBreadCrumbComponent, i1.NzBreadCrumbItemComponent], styles: ["nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'hub-breadcrumb', standalone: true, imports: [CommonModule, NzBreadCrumbModule], template: "<nz-breadcrumb>\n  <nz-breadcrumb-item >ADV CMS</nz-breadcrumb-item>\n</nz-breadcrumb>\n", styles: ["nz-breadcrumb{margin:16px 0}\n"] }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent };
//# sourceMappingURL=hub-center-breadcrumb.mjs.map
