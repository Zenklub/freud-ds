import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FreudTypographyModule } from '@freud-ds/web-components';

import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { AllIconsComponent } from './all-icons/all-icons.component';
import { BrowserModule } from '@angular/platform-browser';

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

export const Verificated = () => {
  return {
    template: `
      <i class='freud-icon freud-icon-verificated' style='font-size: 24px'></i>
      <span class='freud-icon freud-icon-verificated' style='font-size: 24px'></span>
     `
  };
};

export const VerificatedSmall = () => {
  return {
    template: `
      <i class='freud-icon freud-icon-verificated freud-icon-small' style='font-size: 14px'></i>
      <span class='freud-icon freud-icon-verificated freud-icon-small' style='font-size: 14px'></span>
     `
  };
};
