import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSlideMenuComponent } from './slide-menu.component';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
  imports: [CommonModule, SlideMenuModule],
  declarations: [FreudSlideMenuComponent],
  exports: [FreudSlideMenuComponent],
})
export class FreudSlideMenuModule {}
