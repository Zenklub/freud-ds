import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'freud-image',
  template: `
    <p-image
      [width]="width"
      [height]="height"
      [src]="src"
      [alt]="alt"
      [preview]="preview"
      (onShow)="onShow.emit($event)"
      (onHide)="onHide.emit($event)"
    ></p-image>
  `,
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-image',
  },
})
export class FreudImageComponent {
  @Input() width = '100%';
  @Input() height = '100px';
  @Input() alt!: string;
  @Input() src!: string;
  @Input() preview = false;
  @Output() onShow: EventEmitter<void> = new EventEmitter<void>();
  @Output() onHide: EventEmitter<void> = new EventEmitter<void>();
}
