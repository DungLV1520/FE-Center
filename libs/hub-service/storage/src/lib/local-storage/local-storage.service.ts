import { Injectable } from '@angular/core';
import { LocalStoreEnum } from './local-store.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getItem(key: LocalStoreEnum) {
    return localStorage.getItem(key) as string;
  }

  setItem(key: LocalStoreEnum, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: LocalStoreEnum) {
    localStorage.removeItem(key);
  }
}
