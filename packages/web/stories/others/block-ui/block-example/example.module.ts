import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudBlockExampleComponent } from './example.component';
import {
  FreudBlockUIModule,
  FreudButtonModule,
  FreudCardModule,
} from '@freud-ds/web-components';

@NgModule({
  imports: [
    CommonModule,
    FreudBlockUIModule,
    FreudButtonModule,
    FreudCardModule,
  ],
  declarations: [FreudBlockExampleComponent],
  exports: [FreudBlockExampleComponent],
})
export class FreudBlockExampleModule {}
