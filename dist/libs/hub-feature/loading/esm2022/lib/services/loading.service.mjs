import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoadingService {
    constructor() {
        this.isLoadingSubject = new BehaviorSubject(false);
        this.isLoading = this.isLoadingSubject.asObservable();
        this.isShowingLoading = false;
        this.isLoading.subscribe((res) => {
            this.isShowingLoading = res;
        });
    }
    showLoading() {
        this.isLoadingSubject.next(true);
    }
    hideLoading() {
        this.isLoadingSubject.next(false);
    }
    static { this.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9odWItZmVhdHVyZS9sb2FkaW5nL3NyYy9saWIvc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLGNBQWM7SUFTekI7UUFSQSxxQkFBZ0IsR0FBNkIsSUFBSSxlQUFlLENBQzlELEtBQUssQ0FDTixDQUFDO1FBRUYsY0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFHdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOytFQXJCVSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZiLE1BQU07O3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG4gIGlzTG9hZGluZ1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcblxuICBpc0xvYWRpbmcgPSB0aGlzLmlzTG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgaXNTaG93aW5nTG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd2luZ0xvYWRpbmcgPSByZXM7XG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZygpIHtcbiAgICB0aGlzLmlzTG9hZGluZ1N1YmplY3QubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgfVxufVxuIl19