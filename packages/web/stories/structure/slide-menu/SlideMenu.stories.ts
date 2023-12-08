import {
  FreudMenuItem,
  FreudSlideMenuComponent,
} from '@freud-ds/web-components';
import { Story, applicationConfig } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const items: FreudMenuItem[] = [
  {
    label: 'Options',
    items: [
      {
        label: 'Update',
        icon: 'freud-icon freud-icon-refresh',
        command: () => {
          /* Comando */
        },
      },
      {
        label: 'Delete',
        icon: 'freud-icon freud-icon-times',
      },
    ],
  },
  {
    label: 'Navigate',
    items: [
      {
        label: 'Update',
        icon: 'freud-icon freud-icon-external-link',
      },
      {
        label: 'Router',
        icon: 'freud-icon freud-icon-upload',
        routerLink: '/fileupload',
      },
    ],
  },
];

const Template: Story<FreudSlideMenuComponent> = (
  args: FreudSlideMenuComponent,
) => ({
  props: { ...args },
  template: `
    <freud-slide-menu [items]="items"></freud-slide-menu>
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

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
