import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'freud-select-button',
  template: `
    <p-selectButton
      [options]="options"
      [(ngModel)]="selectedOption"
      [multiple]="multiple"
      [tabindex]="tabindex"
      [optionDisabled]="optionDisabled"
      [optionLabel]="optionLabel"
      [disabled]="disabled"
      (onChange)="selectedOptionChange.emit($event)">
    </p-selectButton>
  `,
  styleUrls: ['./select-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-select-button',
    '[class.freud-select-bgcolor]': `bgColor`,
  }
})
export class FreudSelectButtonComponent {

  @Input() options!: any[];
  @Input() optionLabel!: string;
  @Input() selectedOption!: any;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() optionDisabled!: string;
  @Input() tabindex: number = 0;

  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();


}
