import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiDialogModule } from '@taiga-ui/core';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarNativeDateFormatter,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    TuiPreviewModule,
    TuiDialogModule,
    CalendarModule.forRoot(
      {
        useFactory: adapterFactory,
        provide: DateAdapter,
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: EntitiesModule,
        },
      }
    ),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EntitiesModule extends CalendarNativeDateFormatter {}
