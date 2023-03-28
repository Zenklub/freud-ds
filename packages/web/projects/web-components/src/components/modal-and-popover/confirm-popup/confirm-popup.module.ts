import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudConfirmPopupComponent } from './confirm-popup.component';


import { ConfirmationService } from "primeng/api";
import { FreudConfirmationService } from "../../../services/confirmation.service";
import { ConfirmPopupModule } from "primeng/confirmpopup";

@NgModule({
  imports: [CommonModule, ConfirmPopupModule],
  declarations: [FreudConfirmPopupComponent],
  exports: [FreudConfirmPopupComponent],
  providers: [
    FreudConfirmationService,
    ConfirmationService
  ]
})
export class FreudConfirmPopupModule { }
