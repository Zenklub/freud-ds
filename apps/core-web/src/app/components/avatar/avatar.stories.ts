import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudAvatarComponent } from './avatar.component';
import { FreudAvatarModule } from './avatar.module';

export default {
  title: '@freud-ds/core-web/Avatar',
  component: FreudAvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudAvatarModule],
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


const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  component: FreudAvatarComponent,
});

export const Avatar = Template.bind({});
Avatar.args = {
  letter: 'Z',
  imgSrc: '/assets/img/avatar.png'
};
