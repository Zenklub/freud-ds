import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudReactiveFormExampleComponent } from './example.component';
import {
  FreudButtonModule,
  FreudInputTextModule,
} from '@freud-ds/web-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FreudInputTextModule,
    FreudButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [FreudReactiveFormExampleComponent],
  exports: [FreudReactiveFormExampleComponent],
})
export class FreudReactiveFormExampleModule {}
