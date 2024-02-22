import {
  Component, Input,
} from '@angular/core';

@Component({
  selector: 'guild-checkbox',
  styleUrls: ['./guild-checkbox.component.scss'],
  template: `
  <div (click)="onChange()" role="checkbox" tabindex="0">
    <span [attr.checked]="checked"></span>
    <label>{{ label }}</label>
  </div>
  `,
})
export class GuildCheckboxComponent  {

  @Input()
  public checked: boolean = false;

  @Input()
  public label: string = '';

  onChange(): void {
    this.checked = !this.checked;
  }
}
