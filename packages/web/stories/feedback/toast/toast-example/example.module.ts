import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FreudToastExampleComponent } from './example.component';
import { FreudButtonModule, FreudToastModule } from "@freud-ds/web-components";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, FreudToastModule, FreudButtonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudToastExampleComponent],
  exports: [FreudToastExampleComponent]
})
export class FreudToastExampleModule { }
