import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudDialogExampleComponent } from './example.component';
import { FreudButtonModule, FreudDialogModule } from '@freud-ds/web-components';

@NgModule({
  imports: [CommonModule, FreudDialogModule, FreudButtonModule],
  declarations: [FreudDialogExampleComponent],
  exports: [FreudDialogExampleComponent],
})
export class FreudDialogExampleModule {}
