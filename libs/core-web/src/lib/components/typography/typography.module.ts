import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreudLoaderModule } from '../loader';
import { FreudTypographyComponent } from './typography.component';

@NgModule({
  imports: [CommonModule, FreudLoaderModule],
  declarations: [FreudTypographyComponent],
  exports: [FreudTypographyComponent],
})
export class FreudTypographyModule {}
