import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@hub-center/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adv/device',
    pathMatch: 'full',
  },
  {
    path: 'adv',
    canActivate: [authGuard],
    children: [
      {
        path: 'device',
        loadComponent: () =>
          import('./setting-device/list-device/list-device.component').then(
            (m) => m.ListPostComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitiesRoutingModule {}
