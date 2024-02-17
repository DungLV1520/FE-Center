import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@hub-center/guard';

const routes: Routes = [
  {
    path: 'hub',
    canActivate: [authGuard],
    children: [
      {
        path: 'post',
        loadComponent: () =>
          import('./setting-post/list-post/list-post.component').then(
            (m) => m.ListTeamComponent
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
