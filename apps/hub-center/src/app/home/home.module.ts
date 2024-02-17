import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { NavbarComponent } from '@hub-center/hub-feature/navbar';
import { SidebarComponent } from '@hub-center/hub-feature/sidebar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbComponent } from '@hub-center/breadcrumb';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    NzLayoutModule,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  providers: [],
})
export class HomeModule {}
