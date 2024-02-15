import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {
  FreudDialogService,
  FreudDynamicDialogRef,
} from './dynamic-dialog.service';

@NgModule({
  imports: [CommonModule, DynamicDialogModule],
  providers: [FreudDialogService, FreudDynamicDialogRef, DialogService],
})
export class FreudDynamicDialogModule {}
