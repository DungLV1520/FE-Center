import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (
          err.status === 401 ||
          err.error.statusCode === 401 ||
          err.error.message === 'jwt expired'
        ) {
          this.router.navigate(['/login']);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
