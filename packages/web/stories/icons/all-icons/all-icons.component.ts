import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import iconNamesJson from './icon-names.json';

@Component({
  selector: 'all-icons',
  templateUrl: 'all-icons.component.html',
})
export class AllIconsComponent implements OnInit {
  iconNames:string[] = [];
  baseMessage: string = 'Copied to clipboard';
  message: string = this.baseMessage;

  constructor(private clipboardService: ClipboardService) {}
  // constructor(private clipboardService: ClipboardService, private messageService: FreudMessageService) {}

  ngOnInit(): void {
    console.log(iconNamesJson);
    this.iconNames = iconNamesJson;
  }

  clipboard(iconName: string) {
    const freudClass = `freud-icon freud-icon-${iconName}`;
    this.clipboardService.copyFromContent(freudClass);
    this.toast(iconName);
  }

  toast(iconName: string) {
    this.message = `"${iconName}" ${this.baseMessage}!`
    console.log(this.message);
    // const message = {severity:'success', summary:'Service Message', detail:'Via MessageService'};
    // this.messageService.add(message);
  }
}
