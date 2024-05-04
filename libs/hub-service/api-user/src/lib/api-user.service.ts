/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { ILoginReq, Environment } from '@hub-center/hub-model';
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
  breadCrumb = new Subject<any>();
  breadCrumb$ = this.breadCrumb.asObservable();

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
    return this.http.post(this.hubBackendApiEndpoint + `auth/login`, user).pipe(
      map((res: any) => {
        if (res) {
          localStorage.setItem(
            LocalStoreEnum.CUSTOMER_KEY,
            JSON.stringify(res.data.user)
          );

          localStorage.setItem(
            LocalStoreEnum.ACCESS_TOKEN,
            res.data.accessToken
          );
        }

        this.currentUserSubject.next(user);

        return user;
      })
    );
  }

  getListDevice() {
    return this.http.get(this.hubBackendApiEndpoint + `device/get-list`);
  }

  getDeviceByRegionID(params: any) {
    return this.http.post(this.hubBackendApiEndpoint + `device/search`, params);
  }

  getListRegion() {
    return this.http.get(this.hubBackendApiEndpoint + `region/list`);
  }

  getListFolder() {
    return this.http.get(this.hubBackendApiEndpoint + `folder/list`);
  }

  getListFile(obj: any) {
    return this.http.post(this.hubBackendApiEndpoint + `document/search`, obj);
  }

  getListPresentationSlide(obj: any) {
    return this.http.post(this.hubBackendApiEndpoint + `schedule/search`, obj);
  }

  deleteDevice(id: string) {
    return this.http.delete(this.hubBackendApiEndpoint + `device/delete`, {
      params: { ids: [id] },
    });
  }

  moveDevice(data: any) {
    return this.http.put(this.hubBackendApiEndpoint + `device/move`, data);
  }

  renameDevice(params: any) {
    return this.http.put(this.hubBackendApiEndpoint + `device/rename`, params);
  }

  renameFile(id: any, data: any) {
    return this.http.put(
      this.hubBackendApiEndpoint + `document/update/${id}`,
      data
    );
  }

  moveFile(data: any) {
    return this.http.put(this.hubBackendApiEndpoint + `document/move`, data);
  }

  deleteFile(id: any) {
    return this.http.delete(this.hubBackendApiEndpoint + `document/delete`, {
      params: { ids: [id] },
    });
  }

  deletePresentationSlide(id: any) {
    return this.http.delete(this.hubBackendApiEndpoint + `schedule/${id}`);
  }

  uploadFile(data: any) {
    return this.http.post<any>(this.hubBackendApiEndpoint + `document`, data, {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    });
  }

  sendData(data: any): void {
    this.breadCrumb.next(data);
  }
}
