import { Meta, moduleMetadata } from '@storybook/angular';

import { ClipboardModule } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons/all-icons.component';


export default {
  title: 'Icons',
  decorators: [
    moduleMetadata({
      imports: [ClipboardModule],
      declarations: [AllIconsComponent],
    }),
  ],
} as Meta;

export const AllIcons = () => ({
  component: AllIconsComponent,
});

export const Verificated_i = () => {
  return {
    template: `
      <i class='freud-icon freud-icon-verificated' style='font-size: 24px'></i>
     `
  };
};

export const VerificatedSmall_i = () => {
  return {
    template: `
      <i class='freud-icon freud-icon-verificated freud-icon-small' style='font-size: 16px'></i>
     `
  };
};

export const Verificated_span = () => {
  return {
    template: `
      <span class='freud-icon freud-icon-verificated' style='font-size: 24px'></span>
     `
  };
};

export const VerificatedSmall_span= () => {
  return {
    template: `
      <span class='freud-icon freud-icon-verificated freud-icon-small' style='font-size: 16px'></span>
     `
  };
};
