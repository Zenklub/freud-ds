import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-block-ui',
  template: `
    <p-blockUI
      [blocked]="blocked"
      [target]="target">
      <i class="freud-icon freud-icon-lock" style="font-size: 24px"></i>
    </p-blockUI>
  `,
  styleUrls: ['./block-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-block-ui',
  }
})
export class FreudBlockUIComponent {

  @Input() blocked: boolean = false;
  @Input() target!: any;

}
