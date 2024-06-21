import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudImageComponent } from './image.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [CommonModule, ImageModule],
  declarations: [FreudImageComponent],
  exports: [FreudImageComponent],
})
export class FreudImageModule {}
