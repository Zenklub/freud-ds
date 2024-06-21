import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import { icons } from '@freud-ds/icons';

@Component({
  selector: 'all-icons',
  templateUrl: 'all-icons.component.html',
  styleUrls: ['all-icons.component.scss'],
})
export class AllIconsComponent implements OnInit {
  iconNames: string[] = [];
  fullIconNames: string[] = [];

  baseMessage = 'Copied to clipboard';
  message: string = this.baseMessage;

  searchText = '';

  @Input() copyMode: 'class' | 'component' = 'class';

  constructor(private clipboardService: ClipboardService) {}

  ngOnInit(): void {
    this.fullIconNames = [...icons];
    this.filterIcons();
  }

  clipboard(iconName: string) {
    if (this.copyMode === 'class') {
      const freudClass = `freud-icon freud-icon-${iconName}`;
      this.clipboardService.copyFromContent(freudClass);
    } else if (this.copyMode === 'component') {
      const freudComponent = `<freud-icon icon="${iconName}"></freud-icon>`;
      this.clipboardService.copyFromContent(freudComponent);
    }
    this.toast(iconName);
  }

  filterIcons($event?: any) {
    if ($event) {
      this.searchText = $event.srcElement.value.toLowerCase();
    }

    if (this.searchText) {
      this.iconNames = this.fullIconNames.filter((iconName) =>
        iconName.includes(this.searchText),
      );
    } else {
      this.iconNames = [...icons];
    }
  }

  toast(iconName: string) {
    this.message = `"${iconName}" ${this.baseMessage}!`;
  }
}
