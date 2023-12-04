module.exports = {
  stories: [
    "../stories/welcome/welcome.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.story.@(ts)", // Adicione o .stories caso queia mapear as histórias padrões
  ],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
        viewport: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/angular",
    options: {},
  },

  staticDirs: [
    { from: "./assets", to: "assets/" }, // working properly
  ],

  features: {
    modernInlineRender: false,
    buildStoriesJson: true,
  },

  docs: {
    autodocs: true,
  },
};
