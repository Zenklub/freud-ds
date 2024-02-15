import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import {
  FreudAlertMessageComponent,
  FreudAlertMessagesComponent,
} from './alert-messages.component';
import { FreudMessageService } from '../../../services/message.service';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [CommonModule, MessageModule, MessagesModule],
  declarations: [FreudAlertMessagesComponent, FreudAlertMessageComponent],
  exports: [FreudAlertMessagesComponent, FreudAlertMessageComponent],
  providers: [FreudMessageService, MessageService],
})
export class FreudAlertMessagesModule {}
