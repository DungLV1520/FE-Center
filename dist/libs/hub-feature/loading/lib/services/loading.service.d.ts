import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoadingService {
    isLoadingSubject: BehaviorSubject<boolean>;
    isLoading: import("rxjs").Observable<boolean>;
    isShowingLoading: boolean;
    constructor();
    showLoading(): void;
    hideLoading(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingService>;
}
