import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreudLoaderModule } from '../loader';
import { FreudButtonComponent } from '../button';

@NgModule({
  imports: [CommonModule, FreudLoaderModule],
  declarations: [FreudButtonComponent],
  exports: [FreudButtonComponent],
})
export class FreudTypographyModule {}
