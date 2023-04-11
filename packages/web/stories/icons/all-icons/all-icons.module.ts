import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FreudAlertMessagesModule  } from '@freud-ds/web-components';
import { ClipboardModule } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons.component';

@NgModule({
  declarations: [AllIconsComponent],
  imports: [BrowserModule, ClipboardModule, FreudAlertMessagesModule],
  exports: [AllIconsComponent],
})
export class AllIconsModule { }
