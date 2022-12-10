import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from 'primeng/message';

import { FreudAlertMessageComponent, FreudAlertMessagesComponent } from './alert-messages.component';
import { FreudMessageService } from "../../../services/message.service";
import { MessageService } from "primeng/api";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, MessageModule, MessagesModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudAlertMessagesComponent, FreudAlertMessageComponent],
  exports: [FreudAlertMessagesComponent, FreudAlertMessageComponent],
  providers: [FreudMessageService, MessageService]
})
export class FreudAlertMessagesModule { }
