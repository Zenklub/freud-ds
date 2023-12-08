import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { FreudButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [FreudButtonComponent],
  exports: [FreudButtonComponent],
})
export class FreudButtonModule {}
