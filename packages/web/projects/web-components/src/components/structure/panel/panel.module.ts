import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudPanelComponent } from "./panel.component";
import { PanelModule } from "primeng/panel";



@NgModule({
  imports: [CommonModule, PanelModule],
  declarations: [FreudPanelComponent],
  exports: [FreudPanelComponent]
})
export class FreudPanelModule { }
