import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LocalStorageService {
    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    static { this.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9odWItc2VydmljZS9zdG9yYWdlL3NyYy9saWIvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixPQUFPLENBQUMsR0FBbUI7UUFDekIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBbUIsRUFBRSxLQUFVO1FBQ3JDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQW1CO1FBQzVCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztvRkFYVSxtQkFBbUI7dUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07O3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JlRW51bSB9IGZyb20gJy4vbG9jYWwtc3RvcmUuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgZ2V0SXRlbShrZXk6IExvY2FsU3RvcmVFbnVtKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgc2V0SXRlbShrZXk6IExvY2FsU3RvcmVFbnVtLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IExvY2FsU3RvcmVFbnVtKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIl19