import { Component, Input, ViewEncapsulation } from '@angular/core';

type positions =
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'center';
type targetOptions = '_blank' | '_self' | '_top' | '_parent';

@Component({
  selector: 'freud-toast',
  template: `
    <p-toast
      [position]="position"
      [key]="key"
      [class.clickable]="url"
      (click)="url && openURL($event)"
    ></p-toast>
  `,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-toast',
  },
})
export class FreudToastComponent {
  @Input() position: positions = 'top-right';
  @Input() key!: string;
  @Input() url?: string;
  @Input() targetParam: targetOptions = '_blank';

  openURL(event: any): void {
    const isCloseBtn = event.srcElement.className.includes('close-icon');

    if (!isCloseBtn && this.url) {
      window.open(this.url, this.targetParam);
    }
  }
}
