import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudLoaderComponent } from './loader.component';
import { FreudLoaderModule } from './loader.module';

export default {
  title: '@freud-ds/core-web/Loader',
  component: FreudLoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudLoaderModule],
    })
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#6732D1' },
      ],
    }
  },
} as Meta;


const Template: Story<FreudLoaderComponent> = (args: FreudLoaderComponent) => ({
  props: { ...args },
  component: FreudLoaderComponent
});

export const Loader = Template.bind({});
Loader.args = {
};
