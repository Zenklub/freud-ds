import { Component } from '@angular/core';
import { FreudDialogService } from "@freud-ds/web-components";


@Component({
  selector: 'freud-dynamic-dialog-component-example',
  template: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <br>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    <br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  styleUrls: ['./example.component.scss']
})
export class FreudDynamicExampleComponent {

  constructor() {}

}

@Component({
  selector: 'freud-dynamic-dialog-example',
  template: `
    <freud-button (click)="confirm($event)">Clique aqui!</freud-button>
  `,
  styleUrls: ['./example.component.scss']
})
export class FreudDynamicDialogExampleComponent {

  constructor(private dialogService: FreudDialogService) {}

  confirm(event: any) {
    this.dialogService.open(FreudDynamicExampleComponent, {
      header: 'Dynamic Dialog Header',
      width: '70%'
    })
  }
}
