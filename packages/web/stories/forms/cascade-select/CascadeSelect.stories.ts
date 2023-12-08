import { Story } from '@storybook/angular';
import { FreudCascadeSelectComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const items = [
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' },
        ],
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' },
        ],
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' },
        ],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' },
        ],
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' },
        ],
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' },
        ],
      },
    ],
  },
];

const templateHTML = `
    <div style="height: 250px">
        <freud-cascade-select
          [(ngModel)]="value"
          [disabled]="disabled"
          [label]="label"
          [options]="options"
          [optionLabel]="'cname'"
          [optionValue]="'code'"
          [placeholder]="placeholder"
          [optionGroupLabel]="'name'"
          [optionGroupChildren]="['states', 'cities']"
          [helpText]="helpText"
          [invalid]="invalid"
          [bgColor]="bgColor">
      </freud-cascade-select>
    </div>
`;

const Template: Story<FreudCascadeSelectComponent> = (
  args: FreudCascadeSelectComponent,
) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  options: items,
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
  options: items,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  options: items,
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  options: items,
};

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
