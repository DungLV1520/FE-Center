/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { ILoginReq, Environment } from '@hub-center/hub-model';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  hubBackendApiEndpoint: string;
  breadCrumb = new Subject<any>();
  breadCrumb$ = this.breadCrumb.asObservable();

  constructor(private http: HttpClient, private environment: Environment) {
    this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
  }

  login(user: ILoginReq) {
    return this.http.post(this.hubBackendApiEndpoint + `auth/login`, user).pipe(
      map((res: any) => {
        if (res?.result?.ok) {
          localStorage.setItem(
            LocalStoreEnum.CUSTOMER_KEY,
            JSON.stringify(res.data.user)
          );

          localStorage.setItem(
            LocalStoreEnum.ACCESS_TOKEN,
            res.data.accessToken
          );
        }

        return res;
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

  createSlidePresentation(obj: any) {
    return this.http.post(this.hubBackendApiEndpoint + `schedule/create`, obj);
  }

  viewDetailSlidePresentation(obj: any) {
    return this.http.post(this.hubBackendApiEndpoint + `schedule/detail`, obj);
  }

  getAllFiles() {
    return this.http.get(this.hubBackendApiEndpoint + `document`);
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
