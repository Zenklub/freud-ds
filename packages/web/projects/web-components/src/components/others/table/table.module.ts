import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudTableComponent } from './table.component';
import { CardModule } from "primeng/card";

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [FreudTableComponent],
  exports: [FreudTableComponent]
})
export class FreudTableModule { }
