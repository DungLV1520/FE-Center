import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@hub-center/guard';

const routes: Routes = [
  {
    path: 'hub',
    canActivate: [authGuard],
    children: [
      {
        path: 'create-post',
        loadComponent: () =>
          import('./setting-post/create-post/create-post.component').then(
            (m) => m.CreatePostComponent
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
