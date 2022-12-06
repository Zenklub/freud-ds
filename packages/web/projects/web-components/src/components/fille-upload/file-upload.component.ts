import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-file-upload',
  template: `
    <p-skeleton
      [width]="width"
      [height]="height"
    ></p-skeleton>
  `,
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-skeleton',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudFileUploadComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100px';
  @Input() bgColor: boolean = false;

}
