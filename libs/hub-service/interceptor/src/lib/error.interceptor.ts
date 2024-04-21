import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.result.ok === false) {
            throwError(event?.body?.result?.message);
          }
        }
      }),
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
          localStorage.removeItem(LocalStoreEnum.CUSTOMER_KEY);
          localStorage.removeItem(LocalStoreEnum.ACCESS_TOKEN);
        }

        return throwError(err?.error?.result?.message);
      })
    );
  }
}
