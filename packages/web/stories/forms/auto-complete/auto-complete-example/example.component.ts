import { Component, Input } from '@angular/core';

@Component({
  selector: 'freud-auto-complete-example',
  template: `
    <freud-auto-complete
      [(ngModel)]="selectedItem"
      [suggestions]="items"
      [label]="'Label'"
      [disabled]="disabled"
      [invalid]="invalid"
      [bgColor]="bgColor"
      [multiple]="multiple"
      [dropdown]="dropdown"
      [placeholder]="'Placeholder'"
      (completeMethod)="filterItems($event)">
    </freud-auto-complete>
  `,
  styleUrls: ['./example.component.scss']
})
export class FreudAutoCompleteExampleComponent {

  allItems = [
    'Adamantina',
    'Abc',
    'New York',
    'Rome',
    'London',
    'Islanbul',
    'São Paulo',
    'Rio de Janeiro'
  ];
  items = [
    'Adamantina',
    'Abc',
    'New York',
    'Rome',
    'London',
    'Islanbul',
    'São Paulo',
    'Rio de Janeiro'
  ]
  selectedItem: string = '';
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() dropdown = false;
  @Input() multiple = false;

  @Input() invalid: boolean = false;
  constructor() {}

  filterItems(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.allItems.length; i++) {
      let item = this.allItems[i];
      if (item.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.items = filtered;
  }

}
