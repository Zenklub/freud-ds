import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputTextComponent } from './input-text.component';
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, InputTextModule, FormsModule],
  declarations: [FreudInputTextComponent],
  exports: [FreudInputTextComponent]
})
export class FreudInputTextModule { }
