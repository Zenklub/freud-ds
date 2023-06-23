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
      <span class="freud-input-group-addon">
        <freud-radio-button radioValue="teste" name="item"></freud-radio-button>
      </span>
    </div>
  `,
})
export const IconAndRadio = TemplateIconAndRadio.bind({});

const TemplateRadioAndButton: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
      <span class="freud-input-group-addon">
        <freud-radio-button radioValue="teste" name="item2"></freud-radio-button>
      </span>
      <freud-input-text placeholder="Username"></freud-input-text>
      <freud-button>Button</freud-button>
    </div>
  `,
})
export const RadioAndButton = TemplateRadioAndButton.bind({});

export const BGColor = TemplateRadioAndButton.bind({});

const TemplateCheckboxAndText: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: `
    <div class="freud-input-group">
      <span class="freud-input-group-addon">
        <freud-checkbox></freud-checkbox>
      </span>
      <freud-input-text placeholder="Username"></freud-input-text>
      <span class="freud-input-group-addon">ww</span>
    </div>
  `,
})

export const CheckboxAndText = TemplateCheckboxAndText.bind({});


