import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudFileUploadComponent } from './file-upload.component';
import { SkeletonModule } from "primeng/skeleton";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, SkeletonModule, BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [FreudFileUploadComponent],
  exports: [FreudFileUploadComponent]
})
export class FreudFileUploadModule { }
