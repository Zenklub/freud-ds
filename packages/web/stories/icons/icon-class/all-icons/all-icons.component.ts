import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import iconNamesJson from './icon-names.json';

@Component({
  selector: 'all-icons',
  templateUrl: 'all-icons.component.html',
  styleUrls: ['all-icons.component.scss'],
})
export class AllIconsComponent implements OnInit {
  iconNames:string[] = [];
  fullIconNames:string[] = [];

  baseMessage: string = 'Copied to clipboard';
  message: string = this.baseMessage;

  searchText: string = '';

  constructor(private clipboardService: ClipboardService) {}
  // constructor(private clipboardService: ClipboardService, private messageService: FreudMessageService) {}

  ngOnInit(): void {
    console.log(iconNamesJson);
    this.fullIconNames = iconNamesJson;
    this.filterIcons();
  }

  clipboard(iconName: string) {
    const freudClass = `freud-icon freud-icon-${iconName}`;
    this.clipboardService.copyFromContent(freudClass);
    this.toast(iconName);
  }

  filterIcons($event?: any) {
    if($event)  {
      this.searchText = $event.srcElement.value.toLowerCase();
    }

    if (this.searchText) {
      this.iconNames = this.fullIconNames.filter((iconName) => iconName.includes(this.searchText));
    } else {
      this.iconNames = iconNamesJson;
    }
  }


  toast(iconName: string) {
    this.message = `"${iconName}" ${this.baseMessage}!`
    console.log(this.message);
  }
}
