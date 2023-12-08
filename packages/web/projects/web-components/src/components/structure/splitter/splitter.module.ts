import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSplitterComponent } from './splitter.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  imports: [CommonModule, SplitterModule],
  declarations: [FreudSplitterComponent],
  exports: [FreudSplitterComponent],
})
export class FreudSplitterModule {}
