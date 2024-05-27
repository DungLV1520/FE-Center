import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LocalStorageService, LocalStoreEnum, } from '@hub-center/hub-service/storage';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@hub-center/hub-service/storage";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/layout";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/dropdown";
export class NavbarComponent {
    constructor(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.user = JSON.parse(this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY));
    }
    logout() {
        this.localStorageService.removeItem(LocalStoreEnum.ACCESS_TOKEN);
        this.localStorageService.removeItem(LocalStoreEnum.CUSTOMER_KEY);
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(i1.LocalStorageService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["hub-navbar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 4, consts: [[1, "logo"], ["src", "assets/images/logo.svg", "alt", ""], ["nz-dropdown", "", 1, "profile", 3, "nzDropdownMenu"], [1, "mx-2"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", "nzDanger", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-header")(1, "div", 0);
            i0.ɵɵelement(2, "img", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 2)(4, "span", 3);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "titlecase");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "nz-dropdown-menu", null, 5)(10, "ul", 6)(11, "li", 7);
            i0.ɵɵlistener("click", function NavbarComponent_Template_li_click_11_listener() { return ctx.logout(); });
            i0.ɵɵtext(12, "\u0110\u0103ng xu\u1EA5t");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(9);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzDropdownMenu", _r0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, ctx.user == null ? null : ctx.user.username));
        } }, dependencies: [CommonModule, i3.TitleCasePipe, NzLayoutModule, i4.NzHeaderComponent, NzIconModule, i5.NzIconDirective, NzDropDownModule, i6.NzMenuDirective, i6.NzMenuItemDirective, i7.NzDropDownDirective, i7.NzDropDownADirective, i7.NzDropdownMenuComponent], styles: ["[_nghost-%COMP%]{background:white}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}[_nghost-%COMP%]   .profile[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:#000}[_nghost-%COMP%]   nz-header[_ngcontent-%COMP%]{border-bottom:1px solid #d8d8d8;background:unset!important;padding:16px!important;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}[_nghost-%COMP%]   nz-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:176px;height:36px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   nz-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   nz-header[_ngcontent-%COMP%]   .header-profile[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'hub-navbar', standalone: true, imports: [CommonModule, NzLayoutModule, NzIconModule, NzDropDownModule], template: "<nz-header>\n  <div class=\"logo\">\n    <img src=\"assets/images/logo.svg\" alt=\"\" />\n  </div>\n  <a nz-dropdown [nzDropdownMenu]=\"menu\" class=\"profile\">\n    <span class=\"mx-2\">{{ user?.username | titlecase }}</span>\n    <span nz-icon nzType=\"user\" nzTheme=\"outline\"></span>\n  </a>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item nzDanger (click)=\"logout()\">\u0110\u0103ng xu\u1EA5t</li>\n    </ul>\n  </nz-dropdown-menu>\n</nz-header>\n", styles: [":host{background:white}:host a{text-decoration:none;color:#000}:host .profile{display:flex;justify-content:center;align-items:center;color:#000}:host nz-header{border-bottom:1px solid #d8d8d8;background:unset!important;padding:16px!important;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}:host nz-header .logo{width:176px;height:36px;display:flex;align-items:center;justify-content:center}:host nz-header .logo img{height:100%}:host nz-header .header-profile{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px}\n"] }]
    }], function () { return [{ type: i1.LocalStorageService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLWZlYXR1cmUvbmF2YmFyL3NyYy9saWIvbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLWZlYXR1cmUvbmF2YmFyL3NyYy9saWIvbmF2YmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixjQUFjLEdBQ2YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7OztBQVN6QyxNQUFNLE9BQU8sZUFBZTtJQUcxQixZQUNVLG1CQUF3QyxFQUN4QyxNQUFjO1FBRGQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO2dGQWhCVSxlQUFlO29FQUFmLGVBQWU7WUNsQjVCLGlDQUFXLGFBQUE7WUFFUCx5QkFBMkM7WUFDN0MsaUJBQU07WUFDTiw0QkFBdUQsY0FBQTtZQUNsQyxZQUFnQzs7WUFBQSxpQkFBTztZQUMxRCwwQkFBcUQ7WUFDdkQsaUJBQUk7WUFDSixpREFBeUMsYUFBQSxhQUFBO1lBRVgseUZBQVMsWUFBUSxJQUFDO1lBQUMseUNBQVM7WUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQTs7O1lBTmhELGVBQXVCO1lBQXZCLG9DQUF1QjtZQUNqQixlQUFnQztZQUFoQyx1RkFBZ0M7NEJEUzNDLFlBQVksb0JBQUUsY0FBYyx3QkFBRSxZQUFZLHNCQUFFLGdCQUFnQjs7dUZBSTNELGVBQWU7Y0FQM0IsU0FBUzsyQkFDRSxZQUFZLGNBQ1YsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOekxheW91dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbGF5b3V0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQge1xuICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBMb2NhbFN0b3JlRW51bSxcbn0gZnJvbSAnQGh1Yi1jZW50ZXIvaHViLXNlcnZpY2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodWItbmF2YmFyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpMYXlvdXRNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpEcm9wRG93bk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcbiAgdXNlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UoXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbShMb2NhbFN0b3JlRW51bS5DVVNUT01FUl9LRVkpXG4gICAgKTtcbiAgfVxuXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbShMb2NhbFN0b3JlRW51bS5BQ0NFU1NfVE9LRU4pO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtKExvY2FsU3RvcmVFbnVtLkNVU1RPTUVSX0tFWSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gIH1cbn1cbiIsIjxuei1oZWFkZXI+XG4gIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+XG4gIDxhIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJtZW51XCIgY2xhc3M9XCJwcm9maWxlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJteC0yXCI+e3sgdXNlcj8udXNlcm5hbWUgfCB0aXRsZWNhc2UgfX08L3NwYW4+XG4gICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJ1c2VyXCIgbnpUaGVtZT1cIm91dGxpbmVcIj48L3NwYW4+XG4gIDwvYT5cbiAgPG56LWRyb3Bkb3duLW1lbnUgI21lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgIDx1bCBuei1tZW51IG56U2VsZWN0YWJsZT5cbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gbnpEYW5nZXIgKGNsaWNrKT1cImxvZ291dCgpXCI+xJDEg25nIHh14bqldDwvbGk+XG4gICAgPC91bD5cbiAgPC9uei1kcm9wZG93bi1tZW51PlxuPC9uei1oZWFkZXI+XG4iXX0=