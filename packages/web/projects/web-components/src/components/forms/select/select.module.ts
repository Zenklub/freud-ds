import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule, FormsModule, DropdownModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserModule],
  declarations: [FreudSelectComponent],
  exports: [FreudSelectComponent]
})
export class FreudSelectModule { }
