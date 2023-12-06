import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';

import { AllIconsComponent } from '../all-icons/all-icons.component';

export default {
  title: 'Icons',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
      declarations: [AllIconsComponent],
    }),
  ],
} as Meta;

export const AllIcons = () => {
  return {
    template: `
      <all-icons copyMode="class"></all-icons>
     `,
  };
};

export const Default_i = () => {
  return {
    template: `
      <i class="freud-icon freud-icon-verificated"></i>
     `,
  };
};

export const Small_i = () => {
  return {
    template: `
      <i class="freud-icon freud-icon-verificated freud-icon-small"></i>
     `,
  };
};

export const Default_span = () => {
  return {
    template: `
      <span class="freud-icon freud-icon-verificated"></span>
     `,
  };
};

export const Small_span = () => {
  return {
    template: `
      <span class="freud-icon freud-icon-verificated freud-icon-small"></span>
     `,
  };
};
