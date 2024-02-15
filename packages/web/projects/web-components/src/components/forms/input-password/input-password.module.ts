import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputPasswordComponent } from './input-password.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [CommonModule, FormsModule, PasswordModule],
  declarations: [FreudInputPasswordComponent],
  exports: [FreudInputPasswordComponent],
})
export class FreudInputPasswordModule {}
