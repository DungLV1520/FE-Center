import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, EntitiesRoutingModule, TuiPreviewModule, TuiDialogModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EntitiesModule {}
