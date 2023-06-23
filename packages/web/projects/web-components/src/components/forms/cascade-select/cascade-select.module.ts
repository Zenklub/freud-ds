import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCascadeSelectComponent } from './cascade-select.component';
import { FormsModule } from "@angular/forms";
import { CascadeSelectModule } from "primeng/cascadeselect";

@NgModule({
  imports: [CommonModule, FormsModule, CascadeSelectModule],
  declarations: [FreudCascadeSelectComponent],
  exports: [FreudCascadeSelectComponent]
})
export class FreudCascadeSelectModule { }
