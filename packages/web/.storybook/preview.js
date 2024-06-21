import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { importProvidersFrom } from '@angular/core';
import { applicationConfig } from '@storybook/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expand: true,
  },
  viewMode: 'docs',
  options: { showPanel: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
  docs: {
    stories: {
      inline: true,
    },
  },
};

export const decorators = [
  applicationConfig({
    providers: [
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(FormsModule),
      importProvidersFrom(RouterTestingModule),
    ],
  }),
];
