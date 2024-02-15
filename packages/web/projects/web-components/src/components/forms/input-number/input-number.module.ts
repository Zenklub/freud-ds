import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputNumberComponent } from './input-number.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [CommonModule, InputNumberModule, FormsModule],
  declarations: [FreudInputNumberComponent],
  exports: [FreudInputNumberComponent],
})
export class FreudInputNumberModule {}
