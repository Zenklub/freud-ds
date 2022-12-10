import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudPanelMenuComponent } from "./panel-menu.component";
import { PanelMenuModule } from "primeng/panelmenu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, PanelMenuModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudPanelMenuComponent],
  exports: [FreudPanelMenuComponent]
})
export class FreudPanelMenuModule { }
