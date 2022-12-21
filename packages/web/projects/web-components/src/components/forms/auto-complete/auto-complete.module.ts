import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAutoCompleteComponent } from './auto-complete.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AutoCompleteModule } from "primeng/autocomplete";

@NgModule({
  imports: [CommonModule, FormsModule, AutoCompleteModule, BrowserAnimationsModule, BrowserModule],
  declarations: [FreudAutoCompleteComponent],
  exports: [FreudAutoCompleteComponent]
})
export class FreudAutoCompleteModule { }
