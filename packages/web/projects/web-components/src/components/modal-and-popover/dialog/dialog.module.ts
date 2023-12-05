import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudDialogComponent } from './dialog.component';


import { DialogModule } from "primeng/dialog";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, DialogModule, FormsModule],
  declarations: [FreudDialogComponent],
  exports: [FreudDialogComponent],
  providers: []
})
export class FreudDialogModule { }
