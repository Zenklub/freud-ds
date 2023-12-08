import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudProgressBarComponent } from './progress-bar.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [CommonModule, ProgressBarModule],
  declarations: [FreudProgressBarComponent],
  exports: [FreudProgressBarComponent],
})
export class FreudProgressBarModule {}
