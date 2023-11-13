import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudConfirmDialogComponent } from './confirm-dialog.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { FreudButtonModule } from "../../buttons/button";
import { FreudConfirmationService } from "../../../services/confirmation.service";

@NgModule({
  imports: [CommonModule, ConfirmDialogModule, FreudButtonModule],
  declarations: [FreudConfirmDialogComponent],
  exports: [FreudConfirmDialogComponent],
  providers: [
    FreudConfirmationService,
    ConfirmationService
  ]
})
export class FreudConfirmDialogModule {}
