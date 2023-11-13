import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';

import { FreudKnobComponent } from './knob.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, KnobModule, FormsModule],
  declarations: [FreudKnobComponent],
  exports: [FreudKnobComponent]
})
export class FreudKnobModule { }
