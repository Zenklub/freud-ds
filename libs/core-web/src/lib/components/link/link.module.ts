import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreudLinkComponent } from './link.component';

import { FreudIconModule } from '../icon';

@NgModule({
  imports: [CommonModule, FreudIconModule],
  declarations: [FreudLinkComponent],
  exports: [FreudLinkComponent],
})
export class FreudLinkModule {}
