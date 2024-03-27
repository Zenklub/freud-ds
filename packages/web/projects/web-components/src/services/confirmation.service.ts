import { Injectable } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable()
export class FreudConfirmationService {
  requireConfirmation$: Observable<Confirmation>;
  accept: Observable<any>;

  constructor(private primeConfirmation: ConfirmationService) {
    this.requireConfirmation$ =
      this.primeConfirmation['requireConfirmationSource'].asObservable();
    this.accept =
      this.primeConfirmation['acceptConfirmationSource'].asObservable();
  }

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
