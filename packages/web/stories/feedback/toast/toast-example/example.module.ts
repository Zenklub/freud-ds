import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudToastExampleComponent } from './example.component';
import { FreudButtonModule, FreudToastModule } from "@freud-ds/web-components";

@NgModule({
  imports: [CommonModule, FreudToastModule, FreudButtonModule],
  declarations: [FreudToastExampleComponent],
  exports: [FreudToastExampleComponent]
})
export class FreudToastExampleModule { }
