import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';

import { FreudSplitButtonComponent } from './split-button.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [CommonModule, SplitButtonModule, BrowserAnimationsModule, BrowserModule],
  declarations: [FreudSplitButtonComponent],
  exports: [FreudSplitButtonComponent]
})
export class FreudSplitButtonModule { }
