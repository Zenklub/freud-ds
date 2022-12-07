import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSkeletonComponent } from './skeleton.component';
import { SkeletonModule } from "primeng/skeleton";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, SkeletonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudSkeletonComponent],
  exports: [FreudSkeletonComponent]
})
export class FreudSkeletonModule { }
