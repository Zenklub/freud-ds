import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type buttonSizes = 'sm' | 'md' | 'lg';
type buttonColors = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'button[freud-button]',
  exportAs: 'freudButton',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="!loading">
      <ng-content></ng-content>
    </ng-container>

    <freud-loader *ngIf="loading && (color == 'primary' && bgColor)" [bgColor]="false"></freud-loader>
    <freud-loader *ngIf="loading && (color == 'primary' && !bgColor)" [bgColor]="true"></freud-loader>
    <freud-loader *ngIf="loading && (color == 'secondary')" [bgColor]="bgColor"></freud-loader>
    <freud-loader *ngIf="loading && (color == 'ghost')" [bgColor]="bgColor"></freud-loader>

  `,
  host: {
    class: 'freud-btn',
    '[class.freud-btn-color-primary]': `color === 'primary'`,
    '[class.freud-btn-color-secondary]': `color === 'secondary'`,
    '[class.freud-btn-color-ghost]': `color === 'ghost'`,

    '[class.freud-btn-bgcolor]': `bgColor`,
    '[class.freud-btn-loading]': `loading`,

    '[class.freud-btn-size-small]': `size === 'sm'`,
    '[class.freud-btn-size-medium]': `size === 'md'`,
    '[class.freud-btn-size-large]': `size === 'lg'`,
  }
})
export class FreudButtonComponent {

  @Input() size: buttonSizes = 'md';
  @Input() color: buttonColors = 'primary';
  @Input() bgColor = false;
  @Input() loading = false;

}
