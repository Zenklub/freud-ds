import { Story } from '@storybook/angular';
import { FreudSkeletonComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const Template: Story<FreudSkeletonComponent> = (
  args: FreudSkeletonComponent,
) => ({
  props: { ...args },
  template: `
  <div style="width: 350px">
      <freud-skeleton
        [width]="'100%'"
        [height]="'15px'"
        [bgColor]="bgColor">
      </freud-skeleton>
      <br>
      <freud-skeleton
        [width]="'100%'"
        [height]="'15px'"
        [bgColor]="bgColor">
      </freud-skeleton>
      <br>
      <freud-skeleton
        [width]="'350px'"
        [height]="'70px'"
        [bgColor]="bgColor">
      </freud-skeleton>
      <br>
      <div style="display: flex">
        <freud-skeleton style="margin-right: 10px"
          [width]="'170px'"
          [height]="'70px'"
          [bgColor]="bgColor">
        </freud-skeleton>
        <freud-skeleton
          [width]="'170px'"
          [height]="'70px'"
          [bgColor]="bgColor">
        </freud-skeleton>
      </div>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  bgColor: false,
};
export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true,
};

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
