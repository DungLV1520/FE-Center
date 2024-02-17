import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTE } from './login.routes';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { Environment } from '@hub-center/hub-model';
import { environment } from '../../environments/environment.local';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [
    RouterModule.forChild([LOGIN_ROUTE]),
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    HttpClientJsonpModule,
    HttpClientModule,
    NzIconModule,
  ],
  declarations: [LoginComponent],
  providers: [
    ApiUserService,
    { provide: Environment, useValue: environment },
    NzNotificationService,
  ],
})
export class LoginModule {}
