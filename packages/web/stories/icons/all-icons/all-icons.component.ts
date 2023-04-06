import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import iconNamesJson from './icon-names.json';

@Component({
  selector: 'all-icons',
  templateUrl: 'all-icons.component.html',
})
export class AllIconsComponent implements OnInit {
  iconNames:string[] = [];

  constructor(private clipboardService: ClipboardService) {}

  ngOnInit(): void {
    console.log(iconNamesJson);
    this.iconNames = iconNamesJson;
  }

  clipboard(iconName: string) {
    const freudClass = `freud-icon freud-icon-${iconName}`;
    this.clipboardService.copyFromContent(freudClass);
    console.log(freudClass);
  }
}
