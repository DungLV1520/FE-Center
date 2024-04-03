import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, LocalStoreEnum } from '@hub-center/hub-service/storage';

const authGuard = (route, state) => {
    const router = inject(Router);
    const localStorageService = inject(LocalStorageService);
    const accessToken = localStorageService.getItem(LocalStoreEnum.ACCESS_TOKEN);
    const currentUser = JSON.parse(localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY));
    // const roleAdmin = [Role.ROLE_ADMIN, Role.ROLE_USER];
    // const isAdmin = currentUser?.roles?.every((role: string) =>
    //   roleAdmin.includes(role as Role)
    // );
    // if (currentUser && isAdmin) {
    //   return true;
    // }
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

/**
 * Generated bundle index. Do not edit.
 */

export { authGuard };
//# sourceMappingURL=hub-center-guard.mjs.map
