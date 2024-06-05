import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { LoadingService } from '@hub-center/loading';
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnInit {
    private router;
    private apiUserService;
    private route;
    private loadingService;
    ROUTE_DEVICE: string;
    ROUTE_FOLDER: string;
    indexSlideShow: boolean;
    indexPer: number;
    indexRegion: number;
    subDeviceIndex: number;
    subFolderIndex: number;
    openDevice: number;
    folder: any;
    regions: any;
    checkOpenReloadFile: boolean;
    checkOpenReloadDevice: boolean;
    titleDevice: string;
    titleFolder: string;
    titleSlide: string;
    createSlideTitle: string;
    constructor(router: Router, apiUserService: ApiUserService, route: ActivatedRoute, loadingService: LoadingService);
    ngOnInit(): void;
    navigateOriginalDevice(): void;
    navigateOriginalFile(): void;
    navigateDevice(data: any, i?: number, item?: any, index?: number): void;
    navigateFolder(data: any, i?: number, item?: any, index?: number): void;
    getListFolder(): void;
    checkHiddenNotPresentation(): void;
    getListRegion(): void;
    activeSlideShow(): void;
    checkActiveSlideShow(): void;
    checkNavigate(data?: any, id?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "hub-sidebar", never, {}, {}, never, never, true, never>;
}