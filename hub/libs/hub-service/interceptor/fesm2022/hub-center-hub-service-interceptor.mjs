import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
import * as i1 from '@angular/router';
import * as i1$1 from '@hub-center/hub-service/storage';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';

class JwtInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.body.result.ok === false) {
                    throw new Error(event?.body?.result?.message);
                }
            }
        }), catchError((err) => {
            if (err.status === 401) {
                this.router.navigate(['/login']);
            }
            return throwError(err.error.result.message);
        }));
    }
    static { this.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(i0.ɵɵinject(i1.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JwtInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();

/* eslint-disable @typescript-eslint/no-non-null-assertion */
class ErrorInterceptor {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    intercept(request, next) {
        const currentManager = JSON.parse(this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY));
        const accessToken = localStorage.getItem(LocalStoreEnum.ACCESS_TOKEN);
        if (currentManager && accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }
        return next.handle(request);
    }
    static { this.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0.ɵɵinject(i1$1.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1$1.LocalStorageService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ErrorInterceptor, JwtInterceptor };
//# sourceMappingURL=hub-center-hub-service-interceptor.mjs.map
