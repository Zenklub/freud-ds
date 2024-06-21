import { FreudPanelComponent } from '@freud-ds/web-components';
import { Story, applicationConfig } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const Template: Story<FreudPanelComponent> = (args: FreudPanelComponent) => ({
  props: { ...args },
  template: `
    <freud-panel [header]="'Header'" [toggleable]="toggleable">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </freud-panel>
  `,
});

export const Default = Template.bind({});
export const Toggleable = Template.bind({});
Toggleable.args = {
  toggleable: true,
};

const TemplateFooter: Story<FreudPanelComponent> = (
  args: FreudPanelComponent,
) => ({
  props: { ...args },
  template: `
    <freud-panel [header]="'Header'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <ng-container freudTemplatefooter>
          Footer
      </ng-container>
    </freud-panel>
  `,
});

export const Footer = TemplateFooter.bind({});
Footer.args = {
  toggleable: true,
};

const TemplateIcons: Story<FreudPanelComponent> = (
  args: FreudPanelComponent,
) => ({
  props: { ...args },
  template: `
    <freud-panel [header]="'Header'" [toggleable]="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <ng-container freudTemplateIcons>
        <freud-button [color]="'ghost'" class="p-panel-header-icon p-link" (click)="menu.toggle($event)">
          <span class="freud-icon freud-icon-cog"></span>
        </freud-button>
      </ng-container>
    </freud-panel>
  `,
});

export const Icons = TemplateIcons.bind({});

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
