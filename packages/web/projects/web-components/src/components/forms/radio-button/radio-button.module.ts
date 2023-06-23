import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudRadioButtonComponent } from './radio-button.component';
import { FormsModule } from "@angular/forms";
import { RadioButtonModule } from "primeng/radiobutton";

@NgModule({
    imports: [CommonModule, RadioButtonModule, FormsModule],
  declarations: [FreudRadioButtonComponent],
  exports: [FreudRadioButtonComponent]
})
export class FreudRadioButtonModule { }
