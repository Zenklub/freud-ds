import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudPanelMenuComponent } from "./panel-menu.component";
import { PanelMenuModule } from "primeng/panelmenu";



@NgModule({
  imports: [CommonModule, PanelMenuModule],
  declarations: [FreudPanelMenuComponent],
  exports: [FreudPanelMenuComponent]
})
export class FreudPanelMenuModule { }
