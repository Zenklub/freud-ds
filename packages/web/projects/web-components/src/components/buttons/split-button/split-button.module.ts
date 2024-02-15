import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';

import { FreudSplitButtonComponent } from './split-button.component';

@NgModule({
  imports: [CommonModule, SplitButtonModule],
  declarations: [FreudSplitButtonComponent],
  exports: [FreudSplitButtonComponent],
})
export class FreudSplitButtonModule {}
