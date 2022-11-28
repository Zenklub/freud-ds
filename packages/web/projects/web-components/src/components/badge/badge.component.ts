import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-badge',
  templateUrl: './badge.component.html',
})
export class FreudBadgeComponent {

  @Input() value?: string;
}
