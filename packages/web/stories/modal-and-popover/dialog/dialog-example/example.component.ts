import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-dialog-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class FreudDialogExampleComponent {

  @Input() view: 'basic' | 'modal' | 'maximizable' = 'basic';
  displayModal: boolean = false;

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayMaximizable: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
