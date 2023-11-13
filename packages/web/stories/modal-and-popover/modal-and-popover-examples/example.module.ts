import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudConfirmationDialogExampleComponent } from './example.component';
import { FreudButtonModule, FreudConfirmDialogModule } from "@freud-ds/web-components";

@NgModule({
  imports: [CommonModule, FreudConfirmDialogModule, FreudButtonModule],
  declarations: [FreudConfirmationDialogExampleComponent],
  exports: [FreudConfirmationDialogExampleComponent]
})
export class FreudModalExampleModule { }
