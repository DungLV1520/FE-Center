import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import * as i1 from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import * as i2 from '@hub-center/hub-model';
import * as i3 from '@hub-center/hub-service/storage';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
class ApiUserService {
    constructor(http, environment, localStorageService) {
        this.http = http;
        this.environment = environment;
        this.localStorageService = localStorageService;
        this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(user) {
        return this.http.post(this.hubBackendApiEndpoint + `auth/login`, user).pipe(map((res) => {
            if (res) {
                localStorage.setItem(LocalStoreEnum.CUSTOMER_KEY, JSON.stringify(res.data.user));
                localStorage.setItem(LocalStoreEnum.ACCESS_TOKEN, res.data.accessToken);
            }
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    getListDevice() {
        return this.http.get(this.hubBackendApiEndpoint + `device/get-list`);
    }
    static { this.ɵfac = function ApiUserService_Factory(t) { return new (t || ApiUserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Environment), i0.ɵɵinject(i3.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiUserService, factory: ApiUserService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Environment }, { type: i3.LocalStorageService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ApiUserService };
//# sourceMappingURL=hub-center-hub-service-api-user.mjs.map
