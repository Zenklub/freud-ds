import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [CommonModule, ProgressSpinnerModule],
  declarations: [FreudProgressSpinnerComponent],
  exports: [FreudProgressSpinnerComponent],
})
export class FreudProgressSpinnerModule {}
