import { Story } from '@storybook/angular';
import { FreudInputTextComponent } from '@freud-ds/web-components';

// Propriedades disponíveis no FreudInputTextComponent:
// - label: string (padrão: '')
// - helpText: string (padrão: '')
// - placeholder: string (padrão: '')
// - rightIcon: string (padrão: '')
// - invalid: boolean (padrão: false)
// - bgColor: boolean (padrão: false)
// - disabled: boolean (padrão: false)
// - required: boolean (padrão: false)
// - id: string (padrão: auto-gerado)
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade

const templateHTML = `
    <freud-input-text
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [errorText]="errorText"
        [invalid]="invalid"
        [rightIcon]="rightIcon"
        [bgColor]="bgColor">
    </freud-input-text>
`;

const Template: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: ''
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: ''
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  rightIcon: 'freud-icon freud-icon-box'
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helpText: 'Helper Text',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  errorText: 'Error Text',
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
  invalid: true,
  errorText: 'Error Text',
};
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

// Accessibility
const TemplateAccessibility: Story<FreudInputTextComponent> = (
  args: FreudInputTextComponent,
) => ({
  props: { ...args },
  template: `
    <freud-input-text
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [invalid]="invalid"
        [rightIcon]="rightIcon"
        [bgColor]="bgColor"
        [ariaLabel]="ariaLabel"
        [ariaLabelledBy]="ariaLabelledBy">
    </freud-input-text>
`,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.args = {
  label: 'Nome completo',
  placeholder: 'Digite seu nome completo',
  ariaLabel: 'Campo para inserir nome completo do usuário',
  ariaLabelledBy: 'name-heading',
};
