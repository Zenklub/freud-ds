import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSlideMenuComponent } from "./slide-menu.component";
import { SlideMenuModule } from "primeng/slidemenu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, SlideMenuModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudSlideMenuComponent],
  exports: [FreudSlideMenuComponent]
})
export class FreudSlideMenuModule { }
