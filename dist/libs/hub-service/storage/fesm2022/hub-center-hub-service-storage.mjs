import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class LocalStorageService {
    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    static { this.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var LocalStoreEnum;
(function (LocalStoreEnum) {
    LocalStoreEnum["CUSTOMER_KEY"] = "customer_key";
    LocalStoreEnum["ACCESS_TOKEN"] = "access_token";
    LocalStoreEnum["OFFICE_ID"] = "offer_id";
})(LocalStoreEnum || (LocalStoreEnum = {}));

class SessionStorageService {
    getItem(key) {
        return sessionStorage.getItem(key);
    }
    setItem(key, value) {
        if (typeof value === 'string') {
            sessionStorage.setItem(key, value);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    removeItem(key) {
        sessionStorage.removeItem(key);
    }
    static { this.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var SessionStoreEnum;
(function (SessionStoreEnum) {
    SessionStoreEnum["UserInfo"] = "UI";
})(SessionStoreEnum || (SessionStoreEnum = {}));

/**
 * Generated bundle index. Do not edit.
 */

export { LocalStorageService, LocalStoreEnum, SessionStorageService, SessionStoreEnum };
//# sourceMappingURL=hub-center-hub-service-storage.mjs.map
