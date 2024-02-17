import { Injectable } from '@angular/core';
import { SessionStoreEnum } from './session-store.enum';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  getItem(key: string) {
    return sessionStorage.getItem(key) as string;
  }

  setItem(key: string, value: any): void {
    if (typeof value === 'string') {
      sessionStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key: SessionStoreEnum) {
    sessionStorage.removeItem(key);
  }
}
