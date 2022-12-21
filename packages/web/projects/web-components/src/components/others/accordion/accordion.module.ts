import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAccordionComponent, FreudAccordionTabComponent } from './accordion.component';
import { AccordionModule } from "primeng/accordion";

@NgModule({
  imports: [CommonModule, AccordionModule],
  declarations: [FreudAccordionComponent, FreudAccordionTabComponent],
  exports: [FreudAccordionComponent, FreudAccordionTabComponent]
})
export class FreudAccordionModule { }
