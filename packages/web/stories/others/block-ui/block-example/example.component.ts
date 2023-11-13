import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-block-ui-example',
  template: `
    <freud-button (click)="onClick()">Clique aqui!</freud-button>

    <ng-container *ngIf="!withTarget">
      <freud-block-ui [blocked]="blocked">
      </freud-block-ui>
    </ng-container>

    <ng-container *ngIf="withTarget">
      <br>
      <freud-card [header]="'Card Title'" #cardElement>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </freud-card>
      <freud-block-ui [blocked]="blocked" [target]="cardElement">
      </freud-block-ui>
    </ng-container>
  `,
  styleUrls: ['./example.component.scss']
})
export class FreudBlockExampleComponent {

  public blocked: boolean = false;
  @Input() withTarget: boolean = false;
  onClick() {
    this.blocked = true;
    setTimeout(() => this.blocked = false, 5000);
  }

}
