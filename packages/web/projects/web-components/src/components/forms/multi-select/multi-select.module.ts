import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMultiSelectComponent } from './multi-select.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MultiSelectModule } from "primeng/multiselect";

@NgModule({
  imports: [CommonModule, FormsModule, MultiSelectModule, BrowserAnimationsModule, BrowserModule],
  declarations: [FreudMultiSelectComponent],
  exports: [FreudMultiSelectComponent]
})
export class FreudMultiSelectModule { }
