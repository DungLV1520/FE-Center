import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ILoginReq, Environment } from '@hub-center/hub-model';
import * as i0 from "@angular/core";
export declare class ApiUserService {
    private http;
    private environment;
    hubBackendApiEndpoint: string;
    breadCrumb: Subject<string[]>;
    breadCrumb$: import("rxjs").Observable<string[]>;
    addRegion: Subject<boolean>;
    addRegion$: import("rxjs").Observable<boolean>;
    addFolder: Subject<boolean>;
    addFolder$: import("rxjs").Observable<boolean>;
    constructor(http: HttpClient, environment: Environment);
    login(user: ILoginReq): import("rxjs").Observable<any>;
    getListDevice(): import("rxjs").Observable<Object>;
    getDeviceByRegionID(params: any): import("rxjs").Observable<Object>;
    getListRegion(): import("rxjs").Observable<Object>;
    getListFolder(): import("rxjs").Observable<Object>;
    getListFile(obj: any): import("rxjs").Observable<Object>;
    createSlidePresentation(obj: any): import("rxjs").Observable<Object>;
    viewDetailSlidePresentation(obj: any): import("rxjs").Observable<Object>;
    getAllFiles(): import("rxjs").Observable<Object>;
    getListPresentationSlide(obj: any): import("rxjs").Observable<Object>;
    deleteDevice(id: string): import("rxjs").Observable<Object>;
    moveDevice(data: any): import("rxjs").Observable<Object>;
    renameDevice(params: any): import("rxjs").Observable<Object>;
    getInfoDevice(params: any): import("rxjs").Observable<Object>;
    renameFile(id: any, data: any): import("rxjs").Observable<Object>;
    moveFile(data: any): import("rxjs").Observable<Object>;
    deleteFile(id: any): import("rxjs").Observable<Object>;
    deletePresentationSlide(id: any): import("rxjs").Observable<Object>;
    uploadFile(data: any): import("rxjs").Observable<any>;
    getScheduleDetail(deviceId: string): import("rxjs").Observable<Object>;
    applyScheduleToDevice(data: any): import("rxjs").Observable<Object>;
    createRegion(data: any): import("rxjs").Observable<Object>;
    createFolder(data: any): import("rxjs").Observable<Object>;
    sendData(data: string[]): void;
    sendRegion(data: boolean): void;
    sendFolder(data: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiUserService>;
}
