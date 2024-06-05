import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import * as i2 from '@hub-center/hub-model';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
class ApiUserService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.breadCrumb = new Subject();
        this.breadCrumb$ = this.breadCrumb.asObservable();
        this.addRegion = new Subject();
        this.addRegion$ = this.addRegion.asObservable();
        this.addFolder = new Subject();
        this.addFolder$ = this.addFolder.asObservable();
        this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
    }
    login(user) {
        return this.http.post(this.hubBackendApiEndpoint + `auth/login`, user).pipe(map((res) => {
            if (res?.result?.ok) {
                localStorage.setItem(LocalStoreEnum.CUSTOMER_KEY, JSON.stringify(res.data.user));
                localStorage.setItem(LocalStoreEnum.ACCESS_TOKEN, res.data.accessToken);
            }
            return res;
        }));
    }
    getListDevice() {
        return this.http.get(this.hubBackendApiEndpoint + `device/get-list`);
    }
    getDeviceByRegionID(params) {
        return this.http.post(this.hubBackendApiEndpoint + `device/search`, params);
    }
    getListRegion() {
        return this.http.get(this.hubBackendApiEndpoint + `region/list`);
    }
    getListFolder() {
        return this.http.get(this.hubBackendApiEndpoint + `folder/list`);
    }
    getListFile(obj) {
        return this.http.post(this.hubBackendApiEndpoint + `document/search`, obj);
    }
    createSlidePresentation(obj) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/create`, obj);
    }
    viewDetailSlidePresentation(obj) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/detail`, obj);
    }
    getAllFiles() {
        return this.http.get(this.hubBackendApiEndpoint + `document`);
    }
    getListPresentationSlide(obj) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/search`, obj);
    }
    deleteDevice(id) {
        return this.http.delete(this.hubBackendApiEndpoint + `device/delete`, {
            params: { ids: [id] },
        });
    }
    moveDevice(data) {
        return this.http.put(this.hubBackendApiEndpoint + `device/move`, data);
    }
    renameDevice(params) {
        return this.http.put(this.hubBackendApiEndpoint + `device/rename`, params);
    }
    getInfoDevice(params) {
        return this.http.get(this.hubBackendApiEndpoint + `device/${params}`);
    }
    renameFile(id, data) {
        return this.http.put(this.hubBackendApiEndpoint + `document/update/${id}`, data);
    }
    moveFile(data) {
        return this.http.put(this.hubBackendApiEndpoint + `document/move`, data);
    }
    deleteFile(id) {
        return this.http.delete(this.hubBackendApiEndpoint + `document/delete`, {
            params: { ids: [id] },
        });
    }
    deletePresentationSlide(id) {
        return this.http.delete(this.hubBackendApiEndpoint + `schedule/${id}`);
    }
    uploadFile(data) {
        return this.http.post(this.hubBackendApiEndpoint + `document`, data, {
            headers: new HttpHeaders({
                Accept: 'application/json',
            }),
        });
    }
    getScheduleDetail(deviceId) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/detail`, {
            deviceId,
        });
    }
    applyScheduleToDevice(data) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/apply`, data);
    }
    createRegion(data) {
        return this.http.post(this.hubBackendApiEndpoint + `region/create`, data);
    }
    createFolder(data) {
        return this.http.post(this.hubBackendApiEndpoint + `folder/create`, data);
    }
    sendData(data) {
        this.breadCrumb.next(data);
    }
    sendRegion(data) {
        this.addRegion.next(data);
    }
    sendFolder(data) {
        this.addFolder.next(data);
    }
    removeSchedule(data) {
        return this.http.post(this.hubBackendApiEndpoint + `schedule/remove`, data);
    }
    static { this.ɵfac = function ApiUserService_Factory(t) { return new (t || ApiUserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Environment)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiUserService, factory: ApiUserService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Environment }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ApiUserService };
//# sourceMappingURL=hub-center-hub-service-api-user.mjs.map
