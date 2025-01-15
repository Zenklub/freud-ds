import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudHeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FreudHeaderComponent],
  exports: [FreudHeaderComponent]
})
export class FreudHeaderModule { }
