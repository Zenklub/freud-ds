import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudGalleryComponent } from './gallery.component';
import { GalleriaModule } from 'primeng/galleria';
import { SafePipe } from '../../../api/safe.pipe';

@NgModule({
  imports: [CommonModule, GalleriaModule],
  declarations: [FreudGalleryComponent, SafePipe],
  exports: [FreudGalleryComponent],
})
export class FreudGalleryModule {}
