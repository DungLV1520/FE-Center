import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGuard } from '@hub-center/guard';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../entities/entities.module').then((m) => m.EntitiesModule),
      },
    ],
  },
];
