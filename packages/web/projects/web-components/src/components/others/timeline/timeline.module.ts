import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudScrollTopComponent } from './timeline.component';
import { ScrollTopModule } from "primeng/scrolltop";
import { TimelineModule } from "primeng/timeline";

@NgModule({
    imports: [CommonModule, ScrollTopModule, TimelineModule],
  declarations: [FreudScrollTopComponent],
  exports: [FreudScrollTopComponent]
})
export class FreudScrollTopModule { }
