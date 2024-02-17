/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  ILoginReq,
  Environment,
} from '@hub-center/hub-model';
import {
  LocalStorageService,
  LocalStoreEnum,
} from '@hub-center/hub-service/storage';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  public currentUserSubject: BehaviorSubject<unknown>;
  public currentUser: Observable<unknown>;
  hubBackendApiEndpoint: string;

  constructor(
    private http: HttpClient,
    private environment: Environment,
    private localStorageService: LocalStorageService
  ) {
    this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
    this.currentUserSubject = new BehaviorSubject<unknown>(
      JSON.parse(this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): unknown {
    return this.currentUserSubject.value;
  }

  login(user: ILoginReq) {
    return this.http
      .post(this.hubBackendApiEndpoint + `auth/signin`, user)
      .pipe(
        map((user:any) => {
          if (user) {
            localStorage.setItem(
              LocalStoreEnum.CUSTOMER_KEY,
              JSON.stringify(user)
            );

            localStorage.setItem(
              LocalStoreEnum.ACCESS_TOKEN,
              user?.token
            );
          }

          this.currentUserSubject.next(user);

          return user;
        })
      );
  }
}
