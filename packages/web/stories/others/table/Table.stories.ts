import { Story } from '@storybook/angular';
import { FreudTableComponent } from '@freud-ds/web-components';
import dataJson from './data.json';

const data = dataJson['data'];

const Template: Story<FreudTableComponent> = (args: FreudTableComponent) => ({
  props: { ...args },
  template: `
    <div style="width: 100% overflow: auto;">
        <freud-table [value]="value" [columns]="columns">
            <ng-template freudTemplate="header" let-columns="columns">
                  <tr>
                      <th *ngFor="let col of columns">{{col}}</th>
                  </tr>
              </ng-template>
            <ng-template freudTemplate="body" let-item="item" let-columns="columns">
                <tr>
                    <td *ngFor="let col of columns">{{item[col]}}</td>
                </tr>
            </ng-template>
        </freud-table>
    </div>
  `,
});
const TemplateSort: Story<FreudTableComponent> = (args: FreudTableComponent) => ({
  props: { ...args },
  template: `
    <div style="width: 100%">
      <freud-table [value]="value" [columns]="columns">
          <ng-template freudTemplate="header" let-columns="columns">
                <tr>
                    <th freudSortableColumn="{{col}}" *ngFor="let col of columns">{{col}} <freud-sortIcon field="{{col}}"></freud-sortIcon></th>
                </tr>
            </ng-template>
          <ng-template freudTemplate="body" let-item="item" let-columns="columns">
              <tr>
                  <td *ngFor="let col of columns">{{item[col]}}</td>
              </tr>
          </ng-template>
      </freud-table>
    </div>
  `,
});

const TemplateCaptionAndSummary: Story<FreudTableComponent> = (args: FreudTableComponent) => ({
  props: { ...args },
  template: `
    <div style="width: 100% overflow: auto;">
        <freud-table [value]="value" [columns]="columns">
            <ng-template freudTemplate="caption">
                <div class="p-d-flex p-ai-center p-jc-between">
                    Produtos
                    <button icon="pi pi-refresh"></button>
                </div>
            </ng-template>
            <ng-template freudTemplate="header" let-columns="columns">
                  <tr>
                      <th *ngFor="let col of columns">{{col}}</th>
                  </tr>
              </ng-template>
            <ng-template freudTemplate="body" let-item="item" let-columns="columns">
                <tr>
                    <td *ngFor="let col of columns">{{item[col]}}</td>
                </tr>
            </ng-template>

            <ng-template freudTemplate="summary">
                <div class="p-d-flex p-ai-center p-jc-between">
                    Total de 6 produtos.
                </div>
            </ng-template>
        </freud-table>
    </div>
  `,
});
export const Basic = Template.bind({});
Basic.args = {
  value: data,
  columns: Object.keys(data[0])
}

export const CaptionAndSummary = TemplateCaptionAndSummary.bind({});
CaptionAndSummary.args = {
  value: data,
  columns: Object.keys(data[0])
}

export const Sort = TemplateSort.bind({});
Sort.args = {
  value: data,
  columns: Object.keys(data[0])
}

export const BGColor = TemplateSort.bind({});
BGColor.args = {
  value: data,
  columns: Object.keys(data[0])
}
