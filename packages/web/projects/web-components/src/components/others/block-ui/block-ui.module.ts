import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudBlockUIComponent } from './block-ui.component';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  imports: [CommonModule, BlockUIModule],
  declarations: [FreudBlockUIComponent],
  exports: [FreudBlockUIComponent],
})
export class FreudBlockUIModule {}
