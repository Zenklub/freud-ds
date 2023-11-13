import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';

import { FreudBadgeComponent } from './badge.component';

@NgModule({
  imports: [CommonModule, BadgeModule],
  declarations: [FreudBadgeComponent],
  exports: [FreudBadgeComponent],
})
export class FreudBadgeModule { }
