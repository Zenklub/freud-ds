import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudChipComponent } from './chip.component';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [CommonModule, ChipModule],
  declarations: [FreudChipComponent],
  exports: [FreudChipComponent],
})
export class FreudChipModule {}
