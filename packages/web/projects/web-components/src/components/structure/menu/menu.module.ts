import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMenuComponent } from "./menu.component";
import { MenuModule } from "primeng/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, MenuModule, BrowserModule, BrowserAnimationsModule, RouterModule],
  declarations: [FreudMenuComponent],
  exports: [FreudMenuComponent]
})
export class FreudMenuModule { }
