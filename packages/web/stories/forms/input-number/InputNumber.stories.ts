import { Story } from '@storybook/angular';
import { FreudInputNumberComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-input-number
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [invalid]="invalid"
        [errorText]="errorText"
        [showButtons]="showButtons"
        [bgColor]="bgColor">
    </freud-input-number>
`;

const Template: Story<FreudInputNumberComponent> = (args: FreudInputNumberComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: ''
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  showButtons: true
};

const TemplateButtonLayout: Story<FreudInputNumberComponent> = (args: FreudInputNumberComponent) => ({
  props: { ...args },
  template: `
    <freud-input-number
        [(ngModel)]="value"
        [label]="label"
        [buttonLayout]="'stacked'"
        [showButtons]="true"
        [bgColor]="bgColor">
    </freud-input-number> <br><br>
    <freud-input-number
        [(ngModel)]="value"
        [label]="label"
        [buttonLayout]="'horizontal'"
        incrementButtonIcon="freud-icon freud-icon-plus"
        decrementButtonIcon="freud-icon freud-icon-minus"
        [showButtons]="true"
        [bgColor]="bgColor">
    </freud-input-number> <br><br>
    <freud-input-number
        [(ngModel)]="value"
        [label]="label"
        incrementButtonIcon="freud-icon freud-icon-plus"
        decrementButtonIcon="freud-icon freud-icon-minus"
        [buttonLayout]="'vertical'"
        [showButtons]="true">
    </freud-input-number> <br><br>
  `,
});
export const ButtonLayout = TemplateButtonLayout.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  errorText: 'Error Text',
};
