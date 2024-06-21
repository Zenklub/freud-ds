import { Component } from '@angular/core';
import { FreudConfirmationService } from '../../../projects/web-components/src/services/confirmation.service';

@Component({
  selector: 'freud-confirm-dialog-example',
  template: `
    <freud-confirm-dialog></freud-confirm-dialog>
    <freud-button (click)="confirm()">Clique aqui!</freud-button>
  `,
  styleUrls: ['./example.component.scss'],
})
export class FreudConfirmationDialogExampleComponent {
  constructor(private confirmationService: FreudConfirmationService) {}

  confirm() {
    this.confirmationService.confirm({
      header: 'Confirme',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      acceptLabel: 'Aceitar',
      rejectLabel: 'Rejeitar',
    });
  }
}
