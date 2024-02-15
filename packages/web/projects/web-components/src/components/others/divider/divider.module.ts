import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudDividerComponent } from './divider.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [CommonModule, DividerModule],
  declarations: [FreudDividerComponent],
  exports: [FreudDividerComponent],
})
export class FreudDividerModule {}
