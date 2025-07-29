import { Story, applicationConfig } from '@storybook/angular';
import { FreudCheckboxComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

// Propriedades disponíveis no FreudCheckboxComponent:
// - invalid: boolean (padrão: false)
// - binary: boolean (padrão: true)
// - disabled: boolean (padrão: false)
// - label: string (padrão: '')
// - bgColor: boolean (padrão: false)
// - name: string (padrão: '')
// - falseValue: any (padrão: false)
// - trueValue: any (padrão: true)
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade
// - checkboxIcon: string (padrão: 'freud-icon freud-icon-check')
// - inputId: string (padrão: '')
// - required: boolean (padrão: false)
// - id: string (padrão: auto-gerado)

const templateHTML = `
      <freud-checkbox
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [bgColor]="bgColor"
        [invalid]="invalid">
    </freud-checkbox>
`;

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};

const Template: Story<FreudCheckboxComponent> = (
  args: FreudCheckboxComponent,
) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: false,
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  bgColor: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

// Accessibility
const TemplateAccessibility: Story<FreudCheckboxComponent> = (
  args: FreudCheckboxComponent,
) => ({
  props: { ...args },
  template: `
      <freud-checkbox
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [bgColor]="bgColor"
        [invalid]="invalid"
        [ariaLabel]="ariaLabel"
        [ariaLabelledBy]="ariaLabelledBy">
    </freud-checkbox>
`,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.args = {
  label: 'Aceito os termos e condições',
  ariaLabel: 'Checkbox para aceitar termos e condições',
  ariaLabelledBy: 'terms-heading',
};
