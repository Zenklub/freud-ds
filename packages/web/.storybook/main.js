module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.story.@(ts)" // Adicione o .stories caso queia mapear as histórias padrões
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
