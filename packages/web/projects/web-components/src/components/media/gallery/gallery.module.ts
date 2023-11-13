import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudGalleryComponent } from './gallery.component';
import { GalleriaModule } from "primeng/galleria";

@NgModule({
  imports: [CommonModule, GalleriaModule],
  declarations: [FreudGalleryComponent],
  exports: [FreudGalleryComponent]
})
export class FreudGalleryModule { }
