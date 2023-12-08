import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudLoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FreudLoaderComponent],
  exports: [FreudLoaderComponent],
})
export class FreudLoaderModule {}
