import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-confirm-popup',
  template: `
    <p-confirmPopup
      styleClass="freud-confirm-popup">
    </p-confirmPopup>
  `,
  styleUrls: ['./confirm-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-confirm-popup'
  }
})
export class FreudConfirmPopupComponent { }
