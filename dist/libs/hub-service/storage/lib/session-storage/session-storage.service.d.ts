import { SessionStoreEnum } from './session-store.enum';
import * as i0 from "@angular/core";
export declare class SessionStorageService {
    getItem(key: string): string;
    setItem(key: string, value: any): void;
    removeItem(key: SessionStoreEnum): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionStorageService>;
}
