import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudImageComponent } from './image.component';
import { ImageModule } from "primeng/image";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, ImageModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudImageComponent],
  exports: [FreudImageComponent]
})
export class FreudImageModule { }
