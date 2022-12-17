import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCheckboxComponent } from './checkbox.component';
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [CommonModule, CheckboxModule, FormsModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudCheckboxComponent],
  exports: [FreudCheckboxComponent]
})
export class FreudCheckboxModule { }
