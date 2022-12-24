import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudDialogComponent } from './dialog.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogModule } from "primeng/dialog";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, DialogModule, BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [FreudDialogComponent],
  exports: [FreudDialogComponent],
  providers: []
})
export class FreudDialogModule { }
