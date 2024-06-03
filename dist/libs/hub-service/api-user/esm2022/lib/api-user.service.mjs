/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { Environment } from '@hub-center/hub-model';
import { LocalStoreEnum } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@hub-center/hub-model";
export class ApiUserService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXVzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLXNlcnZpY2UvYXBpLXVzZXIvc3JjL2xpYi9hcGktdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUtqRSxNQUFNLE9BQU8sY0FBYztJQVN6QixZQUFvQixJQUFnQixFQUFVLFdBQXdCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVB0RSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUNyQyxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUM7SUFDdEUsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFlO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJ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ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCwgbWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTG9naW5SZXEsIEVudmlyb25tZW50IH0gZnJvbSAnQGh1Yi1jZW50ZXIvaHViLW1vZGVsJztcbmltcG9ydCB7IExvY2FsU3RvcmVFbnVtIH0gZnJvbSAnQGh1Yi1jZW50ZXIvaHViLXNlcnZpY2Uvc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBcGlVc2VyU2VydmljZSB7XG4gIGh1YkJhY2tlbmRBcGlFbmRwb2ludDogc3RyaW5nO1xuICBicmVhZENydW1iID0gbmV3IFN1YmplY3Q8c3RyaW5nW10+KCk7XG4gIGJyZWFkQ3J1bWIkID0gdGhpcy5icmVhZENydW1iLmFzT2JzZXJ2YWJsZSgpO1xuICBhZGRSZWdpb24gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBhZGRSZWdpb24kID0gdGhpcy5hZGRSZWdpb24uYXNPYnNlcnZhYmxlKCk7XG4gIGFkZEZvbGRlciA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIGFkZEZvbGRlciQgPSB0aGlzLmFkZEZvbGRlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KSB7XG4gICAgdGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgPSB0aGlzLmVudmlyb25tZW50Lmh1YkJhY2tlbmRBcGlFbmRwb2ludDtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IElMb2dpblJlcSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBhdXRoL2xvZ2luYCwgdXNlcikucGlwZShcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlcz8ucmVzdWx0Py5vaykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgTG9jYWxTdG9yZUVudW0uQ1VTVE9NRVJfS0VZLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEudXNlcilcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBMb2NhbFN0b3JlRW51bS5BQ0NFU1NfVE9LRU4sXG4gICAgICAgICAgICByZXMuZGF0YS5hY2Nlc3NUb2tlblxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGlzdERldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBkZXZpY2UvZ2V0LWxpc3RgKTtcbiAgfVxuXG4gIGdldERldmljZUJ5UmVnaW9uSUQocGFyYW1zOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgKyBgZGV2aWNlL3NlYXJjaGAsIHBhcmFtcyk7XG4gIH1cblxuICBnZXRMaXN0UmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYHJlZ2lvbi9saXN0YCk7XG4gIH1cblxuICBnZXRMaXN0Rm9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGZvbGRlci9saXN0YCk7XG4gIH1cblxuICBnZXRMaXN0RmlsZShvYmo6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBkb2N1bWVudC9zZWFyY2hgLCBvYmopO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVQcmVzZW50YXRpb24ob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgKyBgc2NoZWR1bGUvY3JlYXRlYCwgb2JqKTtcbiAgfVxuXG4gIHZpZXdEZXRhaWxTbGlkZVByZXNlbnRhdGlvbihvYmo6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBzY2hlZHVsZS9kZXRhaWxgLCBvYmopO1xuICB9XG5cbiAgZ2V0QWxsRmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgKyBgZG9jdW1lbnRgKTtcbiAgfVxuXG4gIGdldExpc3RQcmVzZW50YXRpb25TbGlkZShvYmo6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBzY2hlZHVsZS9zZWFyY2hgLCBvYmopO1xuICB9XG5cbiAgZGVsZXRlRGV2aWNlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBkZXZpY2UvZGVsZXRlYCwge1xuICAgICAgcGFyYW1zOiB7IGlkczogW2lkXSB9LFxuICAgIH0pO1xuICB9XG5cbiAgbW92ZURldmljZShkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBkZXZpY2UvbW92ZWAsIGRhdGEpO1xuICB9XG5cbiAgcmVuYW1lRGV2aWNlKHBhcmFtczogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgKyBgZGV2aWNlL3JlbmFtZWAsIHBhcmFtcyk7XG4gIH1cblxuICBnZXRJbmZvRGV2aWNlKHBhcmFtczogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5odWJCYWNrZW5kQXBpRW5kcG9pbnQgKyBgZGV2aWNlLyR7cGFyYW1zfWApO1xuICB9XG5cbiAgcmVuYW1lRmlsZShpZDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGRvY3VtZW50L3VwZGF0ZS8ke2lkfWAsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIG1vdmVGaWxlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGRvY3VtZW50L21vdmVgLCBkYXRhKTtcbiAgfVxuXG4gIGRlbGV0ZUZpbGUoaWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGRvY3VtZW50L2RlbGV0ZWAsIHtcbiAgICAgIHBhcmFtczogeyBpZHM6IFtpZF0gfSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZVByZXNlbnRhdGlvblNsaWRlKGlkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBzY2hlZHVsZS8ke2lkfWApO1xuICB9XG5cbiAgdXBsb2FkRmlsZShkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBkb2N1bWVudGAsIGRhdGEsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBnZXRTY2hlZHVsZURldGFpbChkZXZpY2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYHNjaGVkdWxlL2RldGFpbGAsIHtcbiAgICAgIGRldmljZUlkLFxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlTY2hlZHVsZVRvRGV2aWNlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBzY2hlZHVsZS9hcHBseWAsIGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlUmVnaW9uKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGByZWdpb24vY3JlYXRlYCwgZGF0YSk7XG4gIH1cblxuICBjcmVhdGVGb2xkZXIoZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGZvbGRlci9jcmVhdGVgLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmREYXRhKGRhdGE6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5icmVhZENydW1iLm5leHQoZGF0YSk7XG4gIH1cblxuICBzZW5kUmVnaW9uKGRhdGE6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmFkZFJlZ2lvbi5uZXh0KGRhdGEpO1xuICB9XG5cbiAgc2VuZEZvbGRlcihkYXRhOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5hZGRGb2xkZXIubmV4dChkYXRhKTtcbiAgfVxuXG4gIHJlbW92ZVNjaGVkdWxlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCArIGBzY2hlZHVsZS9yZW1vdmVgLCBkYXRhKTtcbiAgfVxufVxuIl19