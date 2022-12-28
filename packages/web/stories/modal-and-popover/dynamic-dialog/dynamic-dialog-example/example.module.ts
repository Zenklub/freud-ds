import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent } from './example.component';
import { FreudButtonModule, FreudDynamicDialogModule } from "@freud-ds/web-components";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, FreudDynamicDialogModule, FreudButtonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent],
  exports: [FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent],
  entryComponents: [FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent]
})
export class FreudDynamicExampleModule { }
