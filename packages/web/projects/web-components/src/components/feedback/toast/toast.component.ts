import { Component, Input, ViewEncapsulation } from "@angular/core";

type positions = "top-right" | "top-left" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "center";

@Component({
  selector: 'freud-toast',
  template: `
    <p-toast [position]="position" [key]="key" [class.clickable]="url" (click)="url && openURL($event)"></p-toast>
  `,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-toast'
  }
})
export class FreudToastComponent {

  @Input() position: positions = 'top-right';
  @Input() key!: string;
  @Input() url?: string;
  @Input() openInNewTab = true;

  openURL(event: any): void {
    const isCloseBtn = event.srcElement.className.includes('close-icon');
    const whereToOpen = this.openInNewTab ? '_blank' : '_top';

    if (!isCloseBtn && this.url) {
      window.open(this.url, whereToOpen);
    }
  }
}
