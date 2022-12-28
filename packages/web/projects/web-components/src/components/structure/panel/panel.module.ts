import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudPanelComponent } from "./panel.component";
import { PanelModule } from "primeng/panel";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, PanelModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudPanelComponent],
  exports: [FreudPanelComponent]
})
export class FreudPanelModule { }
