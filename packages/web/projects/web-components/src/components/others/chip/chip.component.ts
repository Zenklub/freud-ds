import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-chip',
  template: `
    <p-chip
      [label]="label"
      [removable]="removable"
      [removeIcon]="removeIcon"
      [styleClass]="styleClass"
      (onRemove)="onRemove.emit($event)">
    </p-chip>
  `,
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-chip',
  }
})
export class FreudChipComponent {
  @Input() removable: boolean = false;
  @Input() styleClass!: string;
  @Input() label!: string;
  @Input() removeIcon: string = 'freud-icon freud-icon-times-circle';
  @Output() onRemove = new EventEmitter();

}
