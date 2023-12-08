import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons.component';
import {
  FreudInputTextModule,
  FreudTypographyModule,
} from '@freud-ds/web-components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AllIconsComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    FreudInputTextModule,
    FreudTypographyModule,
    FormsModule,
  ],
  exports: [AllIconsComponent],
})
export class AllIconsModule {}
