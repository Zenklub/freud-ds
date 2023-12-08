import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [CommonModule, CheckboxModule, FormsModule],
  declarations: [FreudCheckboxComponent],
  exports: [FreudCheckboxComponent],
})
export class FreudCheckboxModule {}
