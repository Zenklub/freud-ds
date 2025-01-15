import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMultiSelectComponent } from './multi-select.component';
import { FormsModule } from "@angular/forms";
import { MultiSelectModule } from "primeng/multiselect";

@NgModule({
  imports: [CommonModule, FormsModule, MultiSelectModule],
  declarations: [FreudMultiSelectComponent],
  exports: [FreudMultiSelectComponent]
})
export class FreudMultiSelectModule { }
