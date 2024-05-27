import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from 'ng-zorro-antd/layout';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import * as i5 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i7 from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import * as i1 from '@hub-center/hub-service/storage';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';
import * as i2 from '@angular/router';
import * as i6 from 'ng-zorro-antd/menu';

class NavbarComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { NavbarComponent };
//# sourceMappingURL=hub-center-hub-feature-navbar.mjs.map
