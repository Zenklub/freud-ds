import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCascadeSelectComponent } from './cascade-select.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CascadeSelectModule } from "primeng/cascadeselect";

@NgModule({
  imports: [CommonModule, FormsModule, CascadeSelectModule, BrowserAnimationsModule, BrowserModule],
  declarations: [FreudCascadeSelectComponent],
  exports: [FreudCascadeSelectComponent]
})
export class FreudCascadeSelectModule { }
