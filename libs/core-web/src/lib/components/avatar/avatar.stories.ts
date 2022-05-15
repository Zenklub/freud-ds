import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudAvatarComponent } from './avatar.component';
import { FreudAvatarModule } from './avatar.module';

export default {
  title: '@freud-ds/core-web/Avatar',
  component: FreudAvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudAvatarModule, CommonModule],
    })
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Default',
      values: [
        { name: 'Default', value: '#FFFFFF' },
        { name: 'BgColor', value: '#6732D1' },
      ],
    }
  },
  argTypes: {
    withImage: {
      name: 'with image',
    }
  }
} as Meta;


const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <div *ngIf="withImage">
      <freud-avatar [size]="size" [bgColor]="bgColor" [imgSrc]="imgSrc"></freud-avatar>
    </div>

    <div *ngIf="!withImage">
      <freud-avatar [size]="size" [bgColor]="bgColor" [letter]="letter"></freud-avatar>
    </div>

  `,
});

export const Avatar = Template.bind({});
Avatar.args = {
  withImage: false,
  letter: 'Z',
  imgSrc: 'assets/img/avatar.png'
};
