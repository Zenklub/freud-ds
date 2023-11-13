import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSpeedDialComponent } from './speed-dial.component';
import { SpeedDialModule } from "primeng/speeddial";
import { FreudTooltipModule } from "../../feedback/tooltip";

@NgModule({
    imports: [CommonModule, SpeedDialModule, FreudTooltipModule],
  declarations: [FreudSpeedDialComponent],
  exports: [FreudSpeedDialComponent]
})
export class FreudSpeedDialModule { }
