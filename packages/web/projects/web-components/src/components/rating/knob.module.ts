import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';

import { FreudKnobComponent } from './knob.component';

@NgModule({
  imports: [CommonModule, KnobModule],
  declarations: [FreudKnobComponent],
  exports: [FreudKnobComponent]
})
export class FreudKnobModule { }
