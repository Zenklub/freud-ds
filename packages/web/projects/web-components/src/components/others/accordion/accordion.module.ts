import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAccordionComponent, FreudAccordionTabComponent } from './accordion.component';
import { Accordion, AccordionModule, AccordionTab } from "primeng/accordion";



@NgModule({
  imports: [CommonModule, AccordionModule],
  declarations: [FreudAccordionComponent, FreudAccordionTabComponent],
  exports: [FreudAccordionComponent, FreudAccordionTabComponent, AccordionTab, Accordion]
})
export class FreudAccordionModule { }
