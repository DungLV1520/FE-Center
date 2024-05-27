import { LocalStoreEnum } from './local-store.enum';
import * as i0 from "@angular/core";
export declare class LocalStorageService {
    getItem(key: LocalStoreEnum): string;
    setItem(key: LocalStoreEnum, value: any): void;
    removeItem(key: LocalStoreEnum): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageService>;
}
