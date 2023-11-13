import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-scroll-panel',
  template: `
      <p-scrollPanel [style]="style">
        <ng-content></ng-content>
      </p-scrollPanel>
  `,
  styleUrls: ['./scroll-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-scroll-panel',
  }
})
export class FreudScrollPanelComponent {

  @Input() style!: any;

}
