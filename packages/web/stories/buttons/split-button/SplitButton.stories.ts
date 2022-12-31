import { Story } from '@storybook/angular';
import { FreudSplitButtonComponent, FreudMenuItem } from '@freud-ds/web-components';

const items: FreudMenuItem[] = [
  {label: 'Update', icon: 'freud-icon freud-icon-refresh', command: () => {
      console.log('Evento update')
    }
  },
  {
    label: 'Delete', icon: 'freud-icon freud-icon-close', command: () => {
      console.log('Evento delete')
    },
  },
  {label: 'Zenklub', icon: 'freud-icon freud-icon-info', url: 'http://zenklub.com'},
  {separator: true},
  {label: 'Setup', icon: 'freud-icon freud-icon-cog'}
]

const itemsWithoutIcon: FreudMenuItem[] = [
  {label: 'Update', command: () => {console.log('Evento update')}
  },
  {
    label: 'Delete', command: () => {console.log('Evento delete')},
  },
  {label: 'Zenklub', url: 'http://zenklub.com'}
]

const templateHTML = `
    <freud-split-button
        [label]="label"
        [disabled]="disabled"
        [items]="items"
        [bgColor]="bgColor">
    </freud-split-button>
    <p *ngIf="!disabled" style="margin-bottom: 180px"></p>
`;

const Template: Story<FreudSplitButtonComponent> = (args: FreudSplitButtonComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Button Default',
  items: items
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Button bg Color',
  items: itemsWithoutIcon,
  bgColor: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button bg Color',
  items: items,
  disabled: true
};
