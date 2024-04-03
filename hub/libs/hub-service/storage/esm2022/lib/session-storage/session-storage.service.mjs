import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SessionStorageService {
    getItem(key) {
        return sessionStorage.getItem(key);
    }
    setItem(key, value) {
        if (typeof value === 'string') {
            sessionStorage.setItem(key, value);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    removeItem(key) {
        sessionStorage.removeItem(key);
    }
    static { this.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2h1Yi1zZXJ2aWNlL3N0b3JhZ2Uvc3JjL2xpYi9zZXNzaW9uLXN0b3JhZ2Uvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFXLENBQUM7SUFDL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFxQjtRQUM5QixjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7c0ZBZlUscUJBQXFCO3VFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNOzt1RkFFUCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Vzc2lvblN0b3JlRW51bSB9IGZyb20gJy4vc2Vzc2lvbi1zdG9yZS5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU2VydmljZSB7XG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIGFzIHN0cmluZztcbiAgfVxuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IFNlc3Npb25TdG9yZUVudW0pIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==