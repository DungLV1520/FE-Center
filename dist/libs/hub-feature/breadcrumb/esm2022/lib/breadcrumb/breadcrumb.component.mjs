import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import * as i0 from "@angular/core";
import * as i1 from "@hub-center/hub-service/api-user";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/breadcrumb";
function BreadcrumbComponent_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-breadcrumb-item");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1);
} }
export class BreadcrumbComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1mZWF0dXJlL2JyZWFkY3J1bWIvc3JjL2xpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9odWItZmVhdHVyZS9icmVhZGNydW1iL3NyYy9saWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0lDRmhFLDBDQUF3RDtJQUFBLFlBRXREO0lBQUEsaUJBQXFCOzs7SUFGaUMsZUFFdEQ7SUFGc0QsNkJBRXREOztBRFNKLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRmxELG1CQUFjLEdBQWEsRUFBRSxDQUFDO0lBRXVCLENBQUM7SUFFdEQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztvRkFUVSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ1poQyxxQ0FBZTtZQUNiLGtHQUV1QjtZQUN6QixpQkFBZ0I7O1lBSHVCLGVBQWlCO1lBQWpCLDRDQUFpQjs0QkRPNUMsWUFBWSxjQUFFLGtCQUFrQjs7dUZBSS9CLG1CQUFtQjtjQVAvQixTQUFTOzJCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpCcmVhZENydW1iTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9icmVhZGNydW1iJztcbmltcG9ydCB7IEFwaVVzZXJTZXJ2aWNlIH0gZnJvbSAnQGh1Yi1jZW50ZXIvaHViLXNlcnZpY2UvYXBpLXVzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodWItYnJlYWRjcnVtYicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QnJlYWRDcnVtYk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYnJlYWRDcnVtYkRhdGE6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlVc2VyU2VydmljZTogQXBpVXNlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hcGlVc2VyU2VydmljZS5icmVhZENydW1iJC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuYnJlYWRDcnVtYkRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG59XG4iLCI8bnotYnJlYWRjcnVtYj5cbiAgPG56LWJyZWFkY3J1bWItaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBicmVhZENydW1iRGF0YVwiPnt7XG4gICAgaXRlbVxuICB9fTwvbnotYnJlYWRjcnVtYi1pdGVtPlxuPC9uei1icmVhZGNydW1iPlxuIl19