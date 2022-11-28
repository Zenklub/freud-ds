import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  controls: { expand: true },
  options: { showPanel: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
  docs: { inlineStories: true },
}