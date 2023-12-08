import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FreudDynamicDialogExampleComponent,
  FreudDynamicExampleComponent,
} from './example.component';
import {
  FreudButtonModule,
  FreudDynamicDialogModule,
} from '@freud-ds/web-components';

@NgModule({
  imports: [CommonModule, FreudDynamicDialogModule, FreudButtonModule],
  declarations: [
    FreudDynamicDialogExampleComponent,
    FreudDynamicExampleComponent,
  ],
  exports: [FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent],
  // entryComponents: [FreudDynamicDialogExampleComponent, FreudDynamicExampleComponent]
})
export class FreudDynamicExampleModule {}
