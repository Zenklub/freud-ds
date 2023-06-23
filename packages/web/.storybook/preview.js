import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { moduleMetadata } from '@storybook/angular';
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expand: true
  },
  viewMode: 'docs',
  options: { showPanel: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
  docs: { inlineStories: true },
}


export const decorators = [
  moduleMetadata({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
    ],
    declarations: []
  })
]