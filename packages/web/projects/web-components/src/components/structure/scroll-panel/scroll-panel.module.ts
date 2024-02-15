import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudScrollPanelComponent } from './scroll-panel.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [CommonModule, ScrollPanelModule],
  declarations: [FreudScrollPanelComponent],
  exports: [FreudScrollPanelComponent],
})
export class FreudScrollPanelModule {}
