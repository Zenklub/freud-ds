import { Injectable } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';

@Injectable()
export class FreudConfirmationService {

  constructor(private primeConfirmation: ConfirmationService) {}

  requireConfirmation$ = this.primeConfirmation['requireConfirmationSource'].asObservable();
  accept = this.primeConfirmation['acceptConfirmationSource'].asObservable();

  confirm(confirmation: Confirmation) {
    this.primeConfirmation['requireConfirmationSource'].next(confirmation);
    return this;
  }

  close() {
    this.primeConfirmation['requireConfirmationSource'].next(null);
    return this;
  }

  onAccept() {
    this.primeConfirmation['acceptConfirmationSource'].next(null);
  }

}
