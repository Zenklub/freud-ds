import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudConfirmPopupExampleComponent } from './example.component';
import { FreudButtonModule, FreudConfirmPopupModule } from "@freud-ds/web-components";

@NgModule({
  imports: [CommonModule, FreudConfirmPopupModule, FreudButtonModule],
  declarations: [FreudConfirmPopupExampleComponent],
  exports: [FreudConfirmPopupExampleComponent]
})
export class FreudConfirmPopupExampleModule { }
