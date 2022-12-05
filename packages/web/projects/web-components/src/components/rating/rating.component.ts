import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-rating',
  template: `
    <p-rating
      [(ngModel)]="value"
      [stars]="stars"
      [cancel]="cancel"
      [disabled]="disabled"
      [readonly]="readonly"
      [iconOnClass]="iconOnClass"
      [iconOffClass]="iconOffClass"
      [iconCancelClass]="iconCancelClass"
      (onRate)="onRateChange($event)"
      (onCancel)="onCancel.emit()">
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
  @Input() cancel: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() iconOnClass: string = 'freud-icon freud-icon-star';
  @Input() iconOffClass: string = 'freud-icon freud-icon-star';
  @Input() iconCancelClass: string = 'freud-icon freud-icon-star';
  @Input() bgColor: boolean = false;
  @Output() onRate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  onRateChange(event: any) {
    console.log(event);
    this.onRate.emit(event);
  }

}
