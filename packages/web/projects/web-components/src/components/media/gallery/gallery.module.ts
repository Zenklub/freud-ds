import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudGalleryComponent } from './gallery.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GalleriaModule } from "primeng/galleria";

@NgModule({
  imports: [CommonModule, GalleriaModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudGalleryComponent],
  exports: [FreudGalleryComponent]
})
export class FreudGalleryModule { }
