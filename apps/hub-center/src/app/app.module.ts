import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { Environment } from '@hub-center/hub-model';
import { environment } from '../environments/environment.local';
import {
  ErrorInterceptor,
  JwtInterceptor,
} from '@hub-center/hub-service/interceptor';
import { NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TuiRootModule } from '@taiga-ui/core';
import {TUI_LANGUAGE, TUI_VIETNAMESE_LANGUAGE} from '@taiga-ui/i18n';
import { of } from 'rxjs';
registerLocaleData(vi);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiRootModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: Environment, useValue: environment },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    NzNotificationService,
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_VIETNAMESE_LANGUAGE),
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(vi_VN);
  }
}
