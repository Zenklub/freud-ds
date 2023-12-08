import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCardComponent } from './card.component';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [FreudCardComponent],
  exports: [FreudCardComponent],
})
export class FreudCardModule {}
