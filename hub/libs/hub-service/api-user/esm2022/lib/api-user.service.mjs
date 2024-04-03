/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { Environment } from '@hub-center/hub-model';
import { LocalStorageService, LocalStoreEnum, } from '@hub-center/hub-service/storage';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@hub-center/hub-model";
import * as i3 from "@hub-center/hub-service/storage";
export class ApiUserService {
    constructor(http, environment, localStorageService) {
        this.http = http;
        this.environment = environment;
        this.localStorageService = localStorageService;
        this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(user) {
        return this.http.post(this.hubBackendApiEndpoint + `auth/login`, user).pipe(map((res) => {
            if (res) {
                localStorage.setItem(LocalStoreEnum.CUSTOMER_KEY, JSON.stringify(res.data.user));
                localStorage.setItem(LocalStoreEnum.ACCESS_TOKEN, res.data.accessToken);
            }
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    getListDevice() {
        return this.http.get(this.hubBackendApiEndpoint + `device/get-list`);
    }
    static { this.ɵfac = function ApiUserService_Factory(t) { return new (t || ApiUserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Environment), i0.ɵɵinject(i3.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiUserService, factory: ApiUserService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Environment }, { type: i3.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXVzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaHViLXNlcnZpY2UvYXBpLXVzZXIvc3JjL2xpYi9hcGktdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFjLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixjQUFjLEdBQ2YsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFLekMsTUFBTSxPQUFPLGNBQWM7SUFLekIsWUFDVSxJQUFnQixFQUNoQixXQUF3QixFQUN4QixtQkFBd0M7UUFGeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRWhELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FBQyxDQUMzRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekUsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDZixJQUFJLEdBQUcsRUFBRTtnQkFDUCxZQUFZLENBQUMsT0FBTyxDQUNsQixjQUFjLENBQUMsWUFBWSxFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzlCLENBQUM7Z0JBRUYsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsY0FBYyxDQUFDLFlBQVksRUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3JCLENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7K0VBN0NVLGNBQWM7dUVBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTs7dUZBRVAsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElMb2dpblJlcSwgRW52aXJvbm1lbnQgfSBmcm9tICdAaHViLWNlbnRlci9odWItbW9kZWwnO1xuaW1wb3J0IHtcbiAgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgTG9jYWxTdG9yZUVudW0sXG59IGZyb20gJ0BodWItY2VudGVyL2h1Yi1zZXJ2aWNlL3N0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBpVXNlclNlcnZpY2Uge1xuICBwdWJsaWMgY3VycmVudFVzZXJTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8dW5rbm93bj47XG4gIHB1YmxpYyBjdXJyZW50VXNlcjogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgaHViQmFja2VuZEFwaUVuZHBvaW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmh1YkJhY2tlbmRBcGlFbmRwb2ludCA9IHRoaXMuZW52aXJvbm1lbnQuaHViQmFja2VuZEFwaUVuZHBvaW50O1xuICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx1bmtub3duPihcbiAgICAgIEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oTG9jYWxTdG9yZUVudW0uQ1VTVE9NRVJfS0VZKSEpXG4gICAgKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5jdXJyZW50VXNlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRVc2VyVmFsdWUoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0LnZhbHVlO1xuICB9XG5cbiAgbG9naW4odXNlcjogSUxvZ2luUmVxKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGF1dGgvbG9naW5gLCB1c2VyKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBMb2NhbFN0b3JlRW51bS5DVVNUT01FUl9LRVksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS51c2VyKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIExvY2FsU3RvcmVFbnVtLkFDQ0VTU19UT0tFTixcbiAgICAgICAgICAgIHJlcy5kYXRhLmFjY2Vzc1Rva2VuXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQodXNlcik7XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRMaXN0RGV2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaHViQmFja2VuZEFwaUVuZHBvaW50ICsgYGRldmljZS9nZXQtbGlzdGApO1xuICB9XG5cbn1cbiJdfQ==