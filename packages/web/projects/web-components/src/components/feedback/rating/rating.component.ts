import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'freud-rating',
  template: `
    <p-rating
      [(ngModel)]="value"
      [stars]="stars || 5"
      [disabled]="disabled"
      [iconOnClass]="iconOnClass"
      [iconOffClass]="iconOffClass"
      [cancel]="false"
      (onRate)="onRateChange($event)"
    >
    </p-rating>
  `,
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-rating',
    '[class.freud-rating-bgcolor]': 'bgColor',
  },
})
export class FreudRatingComponent {
  @Input() value = 0;
  @Input() stars = 5;
  @Input() disabled = false;
  @Input() iconOnClass = 'freud-icon freud-icon-star-fill';
  @Input() iconOffClass = 'freud-icon freud-icon-star';
  @Input() bgColor = false;
  @Output() onRate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  onRateChange(event: any) {
    this.onRate.emit(event);
  }
}
