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
          import('./list-device/list-device.component').then(
            (m) => m.ListDeviceComponent
          ),
      },
      {
        path: 'presentation-detail',
        loadComponent: () =>
          import(
            './list-device/presentationDetail/presentation-detail.component'
          ).then((m) => m.PresentationDetailComponent),
      },
      {
        path: 'file',
        loadComponent: () =>
          import('./list-file/list-file.component').then(
            (m) => m.ListFileComponent
          ),
      },
      {
        path: 'presentation-slide',
        loadComponent: () =>
          import('./presentation-slide/presentation-slide.component').then(
            (m) => m.PresentationSlideComponent
          ),
      },
      {
        path: 'create-presentation-slide',
        loadComponent: () =>
          import(
            './presentation-slide/create-presentation-slide/create-presentation-slide.component'
          ).then((m) => m.CreatePresentationSlideComponent),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./list-user/list-user.component').then(
            (m) => m.ListUserComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitiesRoutingModule {}
