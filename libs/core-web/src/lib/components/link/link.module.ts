import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreudLinkComponent } from './link.component';

import { FreudIconBaseModule } from '../icon-base';

@NgModule({
  imports: [CommonModule, FreudIconBaseModule],
  declarations: [FreudLinkComponent],
  exports: [FreudLinkComponent],
})
export class FreudLinkModule {}
