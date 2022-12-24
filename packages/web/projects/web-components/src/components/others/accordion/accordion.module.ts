import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAccordionComponent, FreudAccordionTabComponent } from './accordion.component';
import { Accordion, AccordionModule, AccordionTab } from "primeng/accordion";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, AccordionModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudAccordionComponent, FreudAccordionTabComponent],
  exports: [FreudAccordionComponent, FreudAccordionTabComponent, AccordionTab, Accordion]
})
export class FreudAccordionModule { }
