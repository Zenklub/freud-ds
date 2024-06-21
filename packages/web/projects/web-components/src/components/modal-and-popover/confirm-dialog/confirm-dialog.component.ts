import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-confirm-dialog',
  template: `
    <p-confirmDialog #cd icon="freud-icon freud-icon-exclamation-triangle">
      <ng-template pTemplate="footer">
        <freud-button [color]="'secondary'" (click)="cd.reject()">{{
          cd.rejectButtonLabel
        }}</freud-button>
        <freud-button (click)="cd.accept()">{{
          cd.acceptButtonLabel
        }}</freud-button>
      </ng-template>
    </p-confirmDialog>
  `,
  styleUrls: ['./confirm-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-confirm-dialog',
  },
})
export class FreudConfirmDialogComponent {}
