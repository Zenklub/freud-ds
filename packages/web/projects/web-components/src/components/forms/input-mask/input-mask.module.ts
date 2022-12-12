import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputMaskComponent } from './input-mask.component';
import { FormsModule } from "@angular/forms";
import { InputMaskModule } from "primeng/inputmask";

@NgModule({
  imports: [CommonModule, FormsModule, InputMaskModule],
  declarations: [FreudInputMaskComponent],
  exports: [FreudInputMaskComponent]
})
export class FreudInputMaskModule { }
