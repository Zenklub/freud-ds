import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudTooltipComponent } from './tooltip.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [CommonModule, TooltipModule],
  declarations: [FreudTooltipComponent],
  exports: [FreudTooltipComponent]
})
export class FreudTooltipModule { }
