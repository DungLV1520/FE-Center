/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LocalStorageService,
  LocalStoreEnum,
} from '@hub-center/hub-service/storage';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentManager = JSON.parse(
      this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)!
    );
    const accessToken = localStorage.getItem(LocalStoreEnum.ACCESS_TOKEN)!;
    if (currentManager && accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
