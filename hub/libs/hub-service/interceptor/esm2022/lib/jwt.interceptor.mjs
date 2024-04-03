/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { LocalStorageService, LocalStoreEnum, } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
import * as i1 from "@hub-center/hub-service/storage";
export class ErrorInterceptor {
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
    static { this.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0.ɵɵinject(i1.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9odWItc2VydmljZS9pbnRlcmNlcHRvci9zcmMvbGliL2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEzQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGNBQWMsR0FDZixNQUFNLGlDQUFpQyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7SUFFaEUsU0FBUyxDQUNQLE9BQTZCLEVBQzdCLElBQWlCO1FBRWpCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUMvRCxDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDdkUsSUFBSSxjQUFjLElBQUksV0FBVyxFQUFFO1lBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFFLFVBQVUsV0FBVyxFQUFFO2lCQUN2QzthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7aUZBcEJVLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgTG9jYWxTdG9yZUVudW0sXG59IGZyb20gJ0BodWItY2VudGVyL2h1Yi1zZXJ2aWNlL3N0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBjb25zdCBjdXJyZW50TWFuYWdlciA9IEpTT04ucGFyc2UoXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbShMb2NhbFN0b3JlRW51bS5DVVNUT01FUl9LRVkpIVxuICAgICk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JlRW51bS5BQ0NFU1NfVE9LRU4pITtcbiAgICBpZiAoY3VycmVudE1hbmFnZXIgJiYgYWNjZXNzVG9rZW4pIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iXX0=