import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudScrollTopComponent } from './scroll-top.component';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  imports: [CommonModule, ScrollTopModule],
  declarations: [FreudScrollTopComponent],
  exports: [FreudScrollTopComponent],
})
export class FreudScrollTopModule {}
