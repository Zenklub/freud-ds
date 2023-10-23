import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons.component';
import { FreudInputTextModule } from '@freud-ds/web-components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllIconsComponent],
  imports: [BrowserModule, ClipboardModule, FreudInputTextModule, FormsModule],
  exports: [AllIconsComponent],
})
export class AllIconsModule { }
