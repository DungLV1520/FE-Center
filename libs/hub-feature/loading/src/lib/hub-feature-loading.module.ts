import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoadingComponent } from './components/loading/loading.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzSpinModule, NzIconModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class HubFeatureLoadingModule {}
