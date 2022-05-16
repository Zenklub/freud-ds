module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [
    { from: '../../../.storybook/assets', to: 'assets/' }, // working properly
  ],
};
