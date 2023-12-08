import { Story } from '@storybook/angular';
import { FreudSliderComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const templateHTML = `
    <freud-slider
        [(ngModel)]="value"
        [tabindex]="tabindex"
        [bgColor]="bgColor"
        [orientation]="orientation"
        [range]="range"
        [disabled]="disabled">
    </freud-slider>
`;

const Template: Story<FreudSliderComponent> = (args: FreudSliderComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  value: 20,
  bgColor: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  value: 20,
  orientation: 'vertical',
};

export const Range = Template.bind({});
Range.args = {
  value: [10, 20],
  range: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  value: 20,
  disabled: true,
};

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
