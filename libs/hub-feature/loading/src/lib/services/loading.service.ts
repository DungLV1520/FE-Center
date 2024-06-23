import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  isLoading = this.isLoadingSubject.asObservable();
  isShowingLoading = false;

  constructor() {
    this.isLoading.subscribe((res) => {
      this.isShowingLoading = res;
    });
  }

  showLoading() {
    this.isLoadingSubject.next(true);
  }

  showLoadingNext() {
    this.isLoadingSubject.next(true);
  }

  hideLoading() {
    this.isLoadingSubject.next(false);
  }
}
