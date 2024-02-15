import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';

import { FreudSelectButtonComponent } from './select-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SelectButtonModule, FormsModule],
  declarations: [FreudSelectButtonComponent],
  exports: [FreudSelectButtonComponent],
})
export class FreudSelectButtonModule {}
