/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { LocalStorageService, LocalStoreEnum, } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
import * as i1 from "@hub-center/hub-service/storage";
export class JwtInterceptor {
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
    static { this.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(i0.ɵɵinject(i1.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JwtInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9odWItc2VydmljZS9pbnRlcmNlcHRvci9zcmMvbGliL2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEzQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGNBQWMsR0FDZixNQUFNLGlDQUFpQyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFDO0lBRWhFLFNBQVMsQ0FDUCxPQUE2QixFQUM3QixJQUFpQjtRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FDL0QsQ0FBQztRQUNGLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDO1FBQ3ZFLElBQUksY0FBYyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsVUFBVSxFQUFFO29CQUNWLGFBQWEsRUFBRSxVQUFVLFdBQVcsRUFBRTtpQkFDdkM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOytFQXBCVSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjOzt1RkFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBMb2NhbFN0b3JlRW51bSxcbn0gZnJvbSAnQGh1Yi1jZW50ZXIvaHViLXNlcnZpY2Uvc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBjb25zdCBjdXJyZW50TWFuYWdlciA9IEpTT04ucGFyc2UoXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbShMb2NhbFN0b3JlRW51bS5DVVNUT01FUl9LRVkpIVxuICAgICk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JlRW51bS5BQ0NFU1NfVE9LRU4pITtcbiAgICBpZiAoY3VycmVudE1hbmFnZXIgJiYgYWNjZXNzVG9rZW4pIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iXX0=