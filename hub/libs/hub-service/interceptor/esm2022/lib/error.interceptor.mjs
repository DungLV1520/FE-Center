import { Injectable } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class JwtInterceptor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1zZXJ2aWNlL2ludGVyY2VwdG9yL3NyYy9saWIvZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBYyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3pDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxTQUFTLENBQ1AsT0FBNkIsRUFDN0IsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzVCLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7K0VBdkJVLGNBQWM7dUVBQWQsY0FBYyxXQUFkLGNBQWM7O3VGQUFkLGNBQWM7Y0FEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgT2JzZXJ2YWJsZSwgdGFwLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmJvZHkucmVzdWx0Lm9rID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50Py5ib2R5Py5yZXN1bHQ/Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyLmVycm9yLnJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19