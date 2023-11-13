import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-header',
  template: `
    <div class="header">
      <div class="container">
        <h2 class="title">{{title}}</h2>
        <p>{{description}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class FreudHeaderComponent {

  @Input() title!: string;
  @Input() description!: string;
}
