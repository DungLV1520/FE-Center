import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/layout";
import * as i3 from "ng-zorro-antd/menu";
import * as i4 from "ng-zorro-antd/icon";
export class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.ROUTE_TEAM = '/personnel/team';
        this.ROUTE_USER = '/personnel/user';
        this.isActivePerson = false;
        this.isActiveOt = false;
        this.isActiveAbs = false;
    }
    navigateOt() {
        this.router.navigate(['log/ot']);
    }
    navigateAbs() {
        this.router.navigate(['log/abs']);
    }
    static { this.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["hub-sidebar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 1, consts: [["nzWidth", "256px", "nzTheme", "light", 1, "ant-layout-sider", "ant-layout-sider-light"], [1, "title-sidebar"], [1, "line"], [1, "title-text"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "mail", "nzTheme", "outline"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-sider", 0)(1, "div", 1);
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵtext(4, "Function List ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ul", 4)(7, "li", 5);
            i0.ɵɵlistener("click", function SidebarComponent_Template_li_click_7_listener() { return ctx.navigateOt(); });
            i0.ɵɵelement(8, "span", 6);
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Setting Device");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("nzSelected", ctx.isActiveOt);
        } }, dependencies: [CommonModule,
            NzLayoutModule, i2.NzSiderComponent, NzMenuModule, i3.NzMenuDirective, i3.NzMenuItemDirective, NzIconModule, i4.NzIconDirective, RouterModule], styles: ["@import\"node_modules/ng-zorro-antd/ng-zorro-antd.min.css\";[_nghost-%COMP%]{background:white}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:16px}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;height:2px;background:rgba(0,0,0,.06)}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:first-child{width:21px}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:last-child{flex:1}[_nghost-%COMP%]   nz-sider[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;color:var(--character-secondary-45, rgba(0, 0, 0, .45));font-size:13px;font-weight:400;line-height:24px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'hub-sidebar', standalone: true, imports: [
                    CommonModule,
                    NzLayoutModule,
                    NzMenuModule,
                    NzIconModule,
                    RouterModule,
                ], template: "<nz-sider\n  class=\"ant-layout-sider ant-layout-sider-light\"\n  nzWidth=\"256px\"\n  nzTheme=\"light\"\n>\n  <div class=\"title-sidebar\">\n    <span class=\"line\"></span>\n    <span class=\"title-text\">Function List </span>\n    <span class=\"line\"></span>\n  </div>\n\n  <ul nz-menu nzMode=\"inline\">\n    <li nz-menu-item (click)=\"navigateOt()\" [nzSelected]=\"isActiveOt\">\n      <span nz-icon nzType=\"mail\" nzTheme=\"outline\"></span>\n      <span>Setting Device</span>\n    </li>\n  </ul>\n</nz-sider>\n", styles: ["@import\"node_modules/ng-zorro-antd/ng-zorro-antd.min.css\";:host{background:white}:host nz-sider{display:block}:host nz-sider .title-sidebar{margin-top:8px;margin-bottom:8px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:16px}:host nz-sider .title-sidebar .line{display:block;height:2px;background:rgba(0,0,0,.06)}:host nz-sider .title-sidebar .line:first-child{width:21px}:host nz-sider .title-sidebar .line:last-child{flex:1}:host nz-sider .title-sidebar .title-text{display:inline-block;white-space:nowrap;color:var(--character-secondary-45, rgba(0, 0, 0, .45));font-size:13px;font-weight:400;line-height:24px}\n"] }]
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1mZWF0dXJlL3NpZGViYXIvc3JjL2xpYi9zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLWZlYXR1cmUvc2lkZWJhci9zcmMvbGliL3NpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBZWxELE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSbEMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFdEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO2lGQWxCVSxnQkFBZ0I7b0VBQWhCLGdCQUFnQjtZQ3BCN0IsbUNBSUMsYUFBQTtZQUVHLDBCQUEwQjtZQUMxQiwrQkFBeUI7WUFBQSw4QkFBYztZQUFBLGlCQUFPO1lBQzlDLDBCQUEwQjtZQUM1QixpQkFBTTtZQUVOLDZCQUE0QixZQUFBO1lBQ1QseUZBQVMsZ0JBQVksSUFBQztZQUNyQywwQkFBcUQ7WUFDckQsNEJBQU07WUFBQSwrQkFBYztZQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBOztZQUZXLGVBQXlCO1lBQXpCLDJDQUF5Qjs0QkREakUsWUFBWTtZQUNaLGNBQWMsdUJBQ2QsWUFBWSw4Q0FDWixZQUFZLHNCQUNaLFlBQVk7O3VGQUtILGdCQUFnQjtjQWI1QixTQUFTOzJCQUNFLGFBQWEsY0FDWCxJQUFJLFdBQ1A7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpMYXlvdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2xheW91dCc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHViLXNpZGViYXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE56TGF5b3V0TW9kdWxlLFxuICAgIE56TWVudU1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG4gIG9mZmljZTogYW55O1xuICBST1VURV9URUFNID0gJy9wZXJzb25uZWwvdGVhbSc7XG4gIFJPVVRFX1VTRVIgPSAnL3BlcnNvbm5lbC91c2VyJztcbiAgaXNBY3RpdmVQZXJzb24gPSBmYWxzZTtcbiAgaXNBY3RpdmVPdCA9IGZhbHNlO1xuICBpc0FjdGl2ZUFicyA9IGZhbHNlO1xuICBpbmRleFBlcj86IG51bWJlcjtcbiAgb2ZmaWNlSWQ/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuYXZpZ2F0ZU90KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9nL290J10pO1xuICB9XG5cbiAgbmF2aWdhdGVBYnMoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2cvYWJzJ10pO1xuICB9XG59XG4iLCI8bnotc2lkZXJcbiAgY2xhc3M9XCJhbnQtbGF5b3V0LXNpZGVyIGFudC1sYXlvdXQtc2lkZXItbGlnaHRcIlxuICBueldpZHRoPVwiMjU2cHhcIlxuICBuelRoZW1lPVwibGlnaHRcIlxuPlxuICA8ZGl2IGNsYXNzPVwidGl0bGUtc2lkZWJhclwiPlxuICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInRpdGxlLXRleHRcIj5GdW5jdGlvbiBMaXN0IDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDx1bCBuei1tZW51IG56TW9kZT1cImlubGluZVwiPlxuICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cIm5hdmlnYXRlT3QoKVwiIFtuelNlbGVjdGVkXT1cImlzQWN0aXZlT3RcIj5cbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwibWFpbFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9zcGFuPlxuICAgICAgPHNwYW4+U2V0dGluZyBEZXZpY2U8L3NwYW4+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvbnotc2lkZXI+XG4iXX0=