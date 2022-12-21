import { FreudMenuComponent, FreudMenuItem } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const items: FreudMenuItem[] = [{
  label: 'Options',
  items: [{
    label: 'Update',
    icon: 'freud-icon freud-icon-refresh',
    command: () => {/* Comando */ }
  },
    {
      label: 'Delete',
      icon: 'freud-icon freud-icon-times'
    }
  ]},
  {
    label: 'Navigate',
    items: [{
      label: 'Update',
      icon: 'freud-icon freud-icon-external-link',
    },
      {
        label: 'Router',
        icon: 'freud-icon freud-icon-upload',
        routerLink: '/fileupload'
      }
    ]}
]

const Template: Story<FreudMenuComponent> = (args: FreudMenuComponent) => ({
  props: { ...args },
  template: `
    <freud-menu [items]="items" [popup]="popup"></freud-menu>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: items,
};

export const BGColor = Template.bind({});
BGColor.args = {
  items: items,
};
