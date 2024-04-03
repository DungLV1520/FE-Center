import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
export declare class ErrorInterceptor implements HttpInterceptor {
    private localStorageService;
    constructor(localStorageService: LocalStorageService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorInterceptor>;
}
