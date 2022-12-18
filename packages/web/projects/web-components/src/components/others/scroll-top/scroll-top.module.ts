import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudScrollTopComponent } from './scroll-top.component';
import { ScrollTopModule } from "primeng/scrolltop";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, ScrollTopModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudScrollTopComponent],
  exports: [FreudScrollTopComponent]
})
export class FreudScrollTopModule { }
