import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSkeletonComponent } from './skeleton.component';
import { SkeletonModule } from "primeng/skeleton";

@NgModule({
  imports: [CommonModule, SkeletonModule],
  declarations: [FreudSkeletonComponent],
  exports: [FreudSkeletonComponent]
})
export class FreudSkeletonModule { }
