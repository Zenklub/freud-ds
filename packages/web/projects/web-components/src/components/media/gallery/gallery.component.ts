import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-gallery',
  template: `
    // Em andamento
  `,
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-gallery',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudGalleryComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100px';
  @Input() bgColor: boolean = false;

}
