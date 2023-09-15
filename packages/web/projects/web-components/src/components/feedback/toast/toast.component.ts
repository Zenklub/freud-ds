import { Component, Input, ViewEncapsulation } from "@angular/core";

type positions = "top-right" | "top-left" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "center";

@Component({
  selector: 'freud-toast',
  template: `
    <p-toast [position]="position" [key]="key" [class.clickable] = "url" (click)="openURL($event)"></p-toast>
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
  @Input() url!: string;

  openURL(event: any): void {
    const isCloseBtn = event.srcElement.className.includes('close-icon');

    if(!isCloseBtn && this.url){
      window.open(this.url, '_blank');
    }
  }
}
