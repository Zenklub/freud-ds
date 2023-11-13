import { Story } from '@storybook/angular';
import { FreudCaptchaComponent } from '@freud-ds/web-components';

const Template: Story<FreudCaptchaComponent> = (args: FreudCaptchaComponent) => ({
  props: { ...args },
  template: `
    <freud-captcha [siteKey]="siteKey" [autoLoadScript]="true" [initCallback]="'initRecaptcha'"></freud-captcha>
  `,
});
export const Default = Template.bind({});
Default.args = {
  siteKey: '6LcLaZojAAAAAIrqqNluTRmId_byInr2cXHG9K8a'
}
export const BGColor = Template.bind({});
BGColor.args = {
  siteKey: '6LcLaZojAAAAAIrqqNluTRmId_byInr2cXHG9K8a'
}

