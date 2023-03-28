import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAutoCompleteComponent } from './auto-complete.component';
import { FormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";

@NgModule({
  imports: [CommonModule, FormsModule, AutoCompleteModule],
  declarations: [FreudAutoCompleteComponent],
  exports: [FreudAutoCompleteComponent]
})
export class FreudAutoCompleteModule { }
