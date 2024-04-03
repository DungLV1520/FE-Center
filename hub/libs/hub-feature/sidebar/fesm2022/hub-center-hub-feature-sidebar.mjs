import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/layout';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import * as i3 from 'ng-zorro-antd/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i4 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

class SidebarComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarComponent };
//# sourceMappingURL=hub-center-hub-feature-sidebar.mjs.map
