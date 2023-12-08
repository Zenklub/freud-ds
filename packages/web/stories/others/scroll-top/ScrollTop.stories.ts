import { Story } from '@storybook/angular';
import { FreudScrollTopComponent } from '@freud-ds/web-components';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const Template: Story<FreudScrollTopComponent> = (
  args: FreudScrollTopComponent,
) => ({
  props: { ...args },
  template: `
    <freud-scroll-top [threshold]="200"></freud-scroll-top>
  `,
});
export const Default = Template.bind({});

const TemplateTarget: Story<FreudScrollTopComponent> = (
  args: FreudScrollTopComponent,
) => ({
  props: { ...args },
  template: `
    <freud-scroll-panel [style]="{height: '200px', width: '300px'}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vitae et leo duis ut diam.
          Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
          Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
          Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
          Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
          Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
          Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
          Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
          Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
          Mattis aliquam faucibus purus in massa tempor nec.
      <freud-scroll-top [target]="'parent'" [threshold]="100"></freud-scroll-top>
    </freud-scroll-panel>
  `,
});

const TemplateTargetBGColor: Story<FreudScrollTopComponent> = (
  args: FreudScrollTopComponent,
) => ({
  props: { ...args },
  template: `
    <freud-scroll-panel [style]="{height: '200px', width: '300px', backgroundColor: '#241249', color: 'white'}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vitae et leo duis ut diam.
          Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
          Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
          Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
          Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
          Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
          Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
          Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
          Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
          Mattis aliquam faucibus purus in massa tempor nec.
        <freud-scroll-top [target]="'parent'" [threshold]="100" [bgColor]="true"></freud-scroll-top>
    </freud-scroll-panel>
  `,
});
export const TargetElement = TemplateTarget.bind({});

export const BGColor = TemplateTargetBGColor.bind({});

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule],
    }),
  ],
};
