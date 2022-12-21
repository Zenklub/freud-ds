import { Story } from '@storybook/angular';
import { FreudScrollTopComponent } from "@freud-ds/web-components";


const Template: Story<FreudScrollTopComponent> = (args: FreudScrollTopComponent) => ({
  props: { ...args },
  template: `
    <freud-scroll-top [threshold]="200"></freud-scroll-top>
  `,
});
export const Default = Template.bind({});

const TemplateTarget: Story<FreudScrollTopComponent> = (args: FreudScrollTopComponent) => ({
  props: { ...args },
  template: `
    <div style="height: 250px;width: 250px; overflow: auto">
        <p>
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
      </p>
        <freud-scroll-top [target]="'parent'" [threshold]="100"></freud-scroll-top>
    </div>
  `,
});

const TemplateTargetBGColor: Story<FreudScrollTopComponent> = (args: FreudScrollTopComponent) => ({
  props: { ...args },
  template: `
    <div style="height: 250px;width: 300px; padding: 10px; overflow: auto;background-color: #241249; color: white">
        <p>
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
      </p>
        <freud-scroll-top [target]="'parent'" [threshold]="100" [bgColor]="true"></freud-scroll-top>
    </div>
  `,
});
export const TargetElement = TemplateTarget.bind({});

export const BGColor = TemplateTargetBGColor.bind({});
