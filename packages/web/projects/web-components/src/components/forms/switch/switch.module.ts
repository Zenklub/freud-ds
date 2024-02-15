import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [CommonModule, InputSwitchModule, FormsModule],
  declarations: [FreudSwitchComponent],
  exports: [FreudSwitchComponent],
})
export class FreudSwitchModule {}
