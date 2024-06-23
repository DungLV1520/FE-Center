import { Route } from '@angular/router';
import { authGuard } from '@hub-center/guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [authGuard],
  },
];
