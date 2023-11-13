import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  imports: [CommonModule, FormsModule, DropdownModule, ReactiveFormsModule],
  declarations: [FreudSelectComponent],
  exports: [FreudSelectComponent]
})
export class FreudSelectModule { }
