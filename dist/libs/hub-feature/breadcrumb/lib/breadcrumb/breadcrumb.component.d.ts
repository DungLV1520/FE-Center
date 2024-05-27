import { OnInit } from '@angular/core';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit {
    private apiUserService;
    breadCrumbData: string[];
    constructor(apiUserService: ApiUserService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "hub-breadcrumb", never, {}, {}, never, never, true, never>;
}
