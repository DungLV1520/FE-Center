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
            throw new Error(event?.body?.result?.message);
          }
        }
      }),
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }

        return throwError(err.error.result.message);
      })
    );
  }
}
