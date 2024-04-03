import { OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import * as i0 from "@angular/core";
export declare class LoadingComponent implements OnInit {
    loadingService: LoadingService;
    constructor(loadingService: LoadingService);
    isLoading: boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingComponent, "hub-loading", never, { "isLoading": { "alias": "isLoading"; "required": false; }; }, {}, never, never, false, never>;
}
