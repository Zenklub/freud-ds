import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-rating',
  template: `
    <p-rating
      [(ngModel)]="value"
      [stars]="stars"
      [disabled]="disabled"
      [iconOnClass]="iconOnClass"
      [iconOffClass]="iconOffClass"
      [cancel]="false"
      (onRate)="onRateChange($event)">
    </p-rating>
  `,
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-rating',
    '[class.freud-rating-bgcolor]': `bgColor`,
  }
})
export class FreudRatingComponent {

  @Input() value: number = 0;
  @Input() stars: number = 5;
  @Input() disabled: boolean = false;
  @Input() iconOnClass: string = 'freud-icon freud-icon-star-fill';
  @Input() iconOffClass: string = 'freud-icon freud-icon-star';
  @Input() bgColor: boolean = false;
  @Output() onRate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  onRateChange(event: any) {
    this.onRate.emit(event);
  }

}
