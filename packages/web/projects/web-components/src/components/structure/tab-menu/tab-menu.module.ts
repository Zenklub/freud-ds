import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudTabMenuComponent } from "./tab-menu.component";
import { TabMenuModule } from "primeng/tabmenu";

@NgModule({
  imports: [CommonModule, TabMenuModule],
  declarations: [FreudTabMenuComponent],
  exports: [FreudTabMenuComponent]
})
export class FreudTabMenuModule { }
