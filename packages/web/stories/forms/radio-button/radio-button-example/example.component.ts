import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-radio-button-example',
  template: `
    <freud-radio-button
      [(ngModel)]="value"
      [disabled]="disabled"
      [label]="label ? (label + ' 1'): ''"
      [name]="'label'"
      [radioValue]="'item2'"
      [bgColor]="bgColor">
    </freud-radio-button>
    <br><br>
    <freud-radio-button
      [(ngModel)]="value"
      [disabled]="disabled"
      [label]="label ? (label + ' 2'): ''"
      [name]="'label'"
      [radioValue]="'item1'"
      [bgColor]="bgColor">
    </freud-radio-button>
  `
})
export class FreudRadioButtonExampleComponent {

  selectedItem: string = '';
  @Input() value!: any;
  @Input() label!: string;
  @Input() bgColor = false;
  @Input() disabled = false;

}
