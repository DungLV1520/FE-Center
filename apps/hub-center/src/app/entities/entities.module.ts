import { NO_ERRORS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    TuiPreviewModule,
    CalendarModule.forRoot({
      useFactory: adapterFactory,
      provide: DateAdapter,
    }),
  ],
  // providers: [
  //   { provide: LOCALE_ID, useValue: 'vi' },
  // { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }
  // ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EntitiesModule {}
