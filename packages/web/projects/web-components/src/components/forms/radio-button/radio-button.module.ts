import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudRadioButtonComponent } from './radio-button.component';
import { FormsModule } from "@angular/forms";
import { RadioButtonModule } from "primeng/radiobutton";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [CommonModule, RadioButtonModule, FormsModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudRadioButtonComponent],
  exports: [FreudRadioButtonComponent]
})
export class FreudRadioButtonModule { }
