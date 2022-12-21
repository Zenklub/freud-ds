import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudTabPanelComponent, FreudTabViewComponent } from "./tab-view.component";
import { TabView, TabViewModule } from "primeng/tabview";
import { SharedModule } from "primeng/api";
import { RippleModule } from "primeng/ripple";

@NgModule({
  imports: [CommonModule, SharedModule, RippleModule, TabViewModule],
  declarations: [FreudTabViewComponent, FreudTabPanelComponent],
  exports: [FreudTabViewComponent, FreudTabPanelComponent],
  providers: [TabView]
})
export class FreudTabViewModule { }
