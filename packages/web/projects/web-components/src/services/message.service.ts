import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable()
export class FreudMessageService {
  constructor(private primeMessage: MessageService) {}

  messageObserver = this.primeMessage['messageSource'].asObservable();
  clearObserver = this.primeMessage['clearSource'].asObservable();

  add(message: Message) {
    if (message) {
      this.primeMessage['messageSource'].next(message);
    }
  }

  addAll(messages: Message[]) {
    if (messages && messages.length) {
      this.primeMessage['messageSource'].next(messages);
    }
  }

  clear(key?: string) {
    this.primeMessage['clearSource'].next(key || null);
  }
}
