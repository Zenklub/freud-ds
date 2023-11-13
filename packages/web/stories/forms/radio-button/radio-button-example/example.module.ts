import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudRadioButtonExampleComponent } from './example.component';
import {
  FreudRadioButtonModule,
} from "@freud-ds/web-components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FreudRadioButtonModule, ReactiveFormsModule, FormsModule],
  declarations: [FreudRadioButtonExampleComponent],
  exports: [FreudRadioButtonExampleComponent]
})
export class FreudRadioButtonExampleModule { }
