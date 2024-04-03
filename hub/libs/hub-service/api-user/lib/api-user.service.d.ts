import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginReq, Environment } from '@hub-center/hub-model';
import { LocalStorageService } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
export declare class ApiUserService {
    private http;
    private environment;
    private localStorageService;
    currentUserSubject: BehaviorSubject<unknown>;
    currentUser: Observable<unknown>;
    hubBackendApiEndpoint: string;
    constructor(http: HttpClient, environment: Environment, localStorageService: LocalStorageService);
    get currentUserValue(): unknown;
    login(user: ILoginReq): Observable<ILoginReq>;
    getListDevice(): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiUserService>;
}
