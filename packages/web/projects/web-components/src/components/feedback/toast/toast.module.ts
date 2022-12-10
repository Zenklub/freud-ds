import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

import { FreudToastComponent } from './toast.component';
import { FreudMessageService } from "../../../services/message.service";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, ToastModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudToastComponent],
  exports: [FreudToastComponent],
  providers: [FreudMessageService, MessageService]
})
export class FreudToastModule { }
