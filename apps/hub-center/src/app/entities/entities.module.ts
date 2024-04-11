import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';

@NgModule({
  declarations: [],
  imports: [CommonModule, EntitiesRoutingModule, TuiPreviewModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EntitiesModule {}
