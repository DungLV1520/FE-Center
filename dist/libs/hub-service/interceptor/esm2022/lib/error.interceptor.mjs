import { Injectable } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (event.body.result.ok === false) {
                    throwError(event?.body?.result?.message);
                }
            }
        }), catchError((err) => {
            if (err.status === 401) {
                this.router.navigate(['/login']);
                localStorage.removeItem(LocalStoreEnum.CUSTOMER_KEY);
                localStorage.removeItem(LocalStoreEnum.ACCESS_TOKEN);
            }
            return throwError(err?.error?.result?.message);
        }));
    }
    static { this.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0.ɵɵinject(i1.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1zZXJ2aWNlL2ludGVyY2VwdG9yL3NyYy9saWIvZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBYyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQUdqRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxTQUFTLENBQ1AsT0FBNkIsRUFDN0IsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzVCLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUNsQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRCxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN0RDtZQUVELE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO2lGQXpCVSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7O3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgT2JzZXJ2YWJsZSwgdGFwLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYWxTdG9yZUVudW0gfSBmcm9tICdAaHViLWNlbnRlci9odWItc2VydmljZS9zdG9yYWdlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmJvZHkucmVzdWx0Lm9rID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihldmVudD8uYm9keT8ucmVzdWx0Py5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShMb2NhbFN0b3JlRW51bS5DVVNUT01FUl9LRVkpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKExvY2FsU3RvcmVFbnVtLkFDQ0VTU19UT0tFTik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnI/LmVycm9yPy5yZXN1bHQ/Lm1lc3NhZ2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=