import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Injectable, Type } from '@angular/core';
import { FreudDynamicDialogConfig } from './dynamic-dialog.interface';

@Injectable()
export class FreudDialogService {
  dialogComponentRefMap = this.dialogService.dialogComponentRefMap;
  constructor(private dialogService: DialogService) {}
  open(
    componentType: Type<any>,
    config: FreudDynamicDialogConfig,
  ): DynamicDialogRef {
    return this.dialogService.open(componentType, config);
  }
}

@Injectable()
export class FreudDynamicDialogRef extends DynamicDialogRef {}
