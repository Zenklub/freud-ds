import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudConfirmDialogComponent } from './confirm-dialog.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { FreudButtonModule } from "../../buttons/button";
import { FreudConfirmationService } from "../../../services/confirmation.service";

@NgModule({
  imports: [CommonModule, ConfirmDialogModule, BrowserModule, BrowserAnimationsModule, FreudButtonModule],
  declarations: [FreudConfirmDialogComponent],
  exports: [FreudConfirmDialogComponent],
  providers: [
    FreudConfirmationService,
    ConfirmationService
  ]
})
export class FreudConfirmDialogModule { }
