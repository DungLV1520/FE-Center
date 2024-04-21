import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {
  LocalStorageService,
  LocalStoreEnum,
} from '@hub-center/hub-service/storage';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const accessToken = localStorageService.getItem(LocalStoreEnum.ACCESS_TOKEN);
  const currentUser = JSON.parse(
    localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)
  );

  if (currentUser && accessToken) {
    return true;
  }

  localStorageService.removeItem(LocalStoreEnum.ACCESS_TOKEN);
  localStorageService.removeItem(LocalStoreEnum.CUSTOMER_KEY);
  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url },
  });

  return false;
};
