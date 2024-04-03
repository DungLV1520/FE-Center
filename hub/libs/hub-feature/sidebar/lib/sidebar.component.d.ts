import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SidebarComponent {
    private router;
    office: any;
    ROUTE_TEAM: string;
    ROUTE_USER: string;
    isActivePerson: boolean;
    isActiveOt: boolean;
    isActiveAbs: boolean;
    indexPer?: number;
    officeId?: number;
    constructor(router: Router);
    navigateOt(): void;
    navigateAbs(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "hub-sidebar", never, {}, {}, never, never, true, never>;
}
