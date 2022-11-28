import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';

import { FreudBadgeComponent } from './badge.component';
import { BadgeModule } from './badge.api.module';
// import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [CommonModule, ButtonModule, BadgeModule],
  declarations: [FreudBadgeComponent],
  exports: [FreudBadgeComponent],
})
export class FreudBadgeModule { }
