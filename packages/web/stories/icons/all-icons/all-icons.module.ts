import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons.component';

@NgModule({
  declarations: [AllIconsComponent],
  imports: [BrowserModule, ClipboardModule],
})
export class AllIconsModule { }
