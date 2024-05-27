import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ErrorInterceptor implements HttpInterceptor {
    private router;
    constructor(router: Router);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorInterceptor>;
}
