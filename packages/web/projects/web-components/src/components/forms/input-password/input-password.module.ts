import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudInputPasswordComponent } from './input-password.component';
import { FormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
      CommonModule, FormsModule, PasswordModule, BrowserAnimationsModule,
      BrowserModule],
  declarations: [FreudInputPasswordComponent],
  exports: [FreudInputPasswordComponent]
})
export class FreudInputPasswordModule { }
