module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(ts)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
        viewport: false,
      },
    },
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: [
    { from: './assets', to: 'assets/' }, // working properly
  ],
  features: {
    modernInlineRender: false,
    buildStoriesJson: true
  }
    
}