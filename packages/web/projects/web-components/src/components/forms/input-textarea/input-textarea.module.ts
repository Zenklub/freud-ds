import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputTextAreaComponent } from './input-textarea.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  imports: [CommonModule, InputTextareaModule, FormsModule, ReactiveFormsModule],
  declarations: [FreudInputTextAreaComponent],
  exports: [FreudInputTextAreaComponent]
})
export class FreudInputTextAreaModule { }
