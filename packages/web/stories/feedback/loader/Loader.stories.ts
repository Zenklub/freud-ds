import { Story } from '@storybook/angular';
import { FreudLoaderComponent } from '@freud-ds/web-components';

const Template: Story<FreudLoaderComponent> = (args: FreudLoaderComponent) => ({
  props: { ...args },
  template: `
    <freud-loader
      [size]="size"
      [bgColor]="bgColor">
    </freud-loader>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const TemplateBG: Story<FreudLoaderComponent> = (
  args: FreudLoaderComponent,
) => ({
  props: { ...args },
  template: `
    <freud-loader style="margin-right: 20px;"
      [bgColor]="true">
    </freud-loader>
  `,
});
export const BGColor = TemplateBG.bind({});

const TemplateSize: Story<FreudLoaderComponent> = (
  args: FreudLoaderComponent,
) => ({
  props: { ...args },
  template: `
    <div style="display: inline-flex;align-items: center;">
      <freud-loader style="margin-right: 20px;"
        [size]="'sm'">
      </freud-loader>

      <freud-loader
        [size]="'lg'">
      </freud-loader>
    </div>
  `,
});
export const Size = TemplateSize.bind({});
