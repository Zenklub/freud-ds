import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable()
export class FreudMessageService {
  messageObserver: Observable<Message | Message[]>;
  clearObserver: Observable<string>;

  constructor(private primeMessage: MessageService) {
    this.messageObserver = this.primeMessage['messageSource'].asObservable();
    this.clearObserver = this.primeMessage['clearSource'].asObservable();
  }

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
