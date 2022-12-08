import { FreudBreadcrumbComponent, FreudMenuItem } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const items: FreudMenuItem[] = [
  {label: 'Item1'},
  {label: 'Item2'},
  {label: 'Item3'},
  {label: 'Item4'}
]
const home: FreudMenuItem = {
  icon: 'freud-icon freud-icon-home'
}

const Template: Story<FreudBreadcrumbComponent> = (args: FreudBreadcrumbComponent) => ({
  props: { ...args },
  template: `
    <freud-breadcrumb [bgColor]="bgColor" [items]="items" [home]="home"></freud-breadcrumb>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: items,
  home: home,
};
export const BgColor = Template.bind({});
BgColor.args = {
  items: items,
  home: home,
  bgColor: true
};
