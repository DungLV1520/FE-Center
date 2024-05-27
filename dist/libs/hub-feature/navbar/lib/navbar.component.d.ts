import { LocalStorageService } from '@hub-center/hub-service/storage';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class NavbarComponent {
    private localStorageService;
    private router;
    user: any;
    constructor(localStorageService: LocalStorageService, router: Router);
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarComponent, "hub-navbar", never, {}, {}, never, never, true, never>;
}
