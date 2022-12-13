import { Story } from '@storybook/angular';
import { FreudInputTextComponent } from '@freud-ds/web-components';

const TemplateIconLeft: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
      <span class="freud-input-group-addon"><i class="freud-icon freud-icon-user"></i></span>
      <freud-input-text placeholder="Username"></freud-input-text>
    </div>
  `,
})
export const IconLeft = TemplateIconLeft.bind({});

const TemplateIconRight: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
      <freud-input-text placeholder="Username"></freud-input-text>
      <span class="freud-input-group-addon"><i class="freud-icon freud-icon-user"></i></span>
    </div>
  `,
})
export const IconRight = TemplateIconRight.bind({});

const TemplateIconAndRadio: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
      <span class="freud-input-group-addon"><i class="freud-icon freud-icon-user"></i></span>
      <freud-input-text placeholder="Username"></freud-input-text>
<!--      <span class="p-inputgroup-addon"></span>-->
    </div>
  `,
})
export const IconAndRadio = TemplateIconAndRadio.bind({});

const TemplateRadioAndButton: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
        <!--      Aduardando Radio Button-->
      <freud-input-text placeholder="Username"></freud-input-text>
      <freud-button>Button</freud-button>
    </div>
  `,
})
export const RadioAndButton = TemplateRadioAndButton.bind({});

export const BGColor = TemplateRadioAndButton.bind({});



