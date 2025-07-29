import { Story } from '@storybook/angular';
import { FreudInputMaskComponent } from '@freud-ds/web-components';

// Propriedades disponíveis no FreudInputMaskComponent:
// - label: string (padrão: '')
// - helpText: string (padrão: '')
// - placeholder: string (padrão: '')
// - invalid: boolean (padrão: false)
// - mask: string (padrão: '')
// - unmask: boolean (padrão: false)
// - slotChar: string (padrão: '')
// - characterPattern: string (padrão: '')
// - autoClear: boolean (padrão: true)
// - bgColor: boolean (padrão: false)
// - disabled: boolean (padrão: false)
// - required: boolean (padrão: false)
// - id: string (padrão: auto-gerado)
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade

const templateHTML = `
    <freud-input-mask
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [errorText]="errorText"
        [invalid]="invalid"
        [mask]="mask"
        [bgColor]="bgColor">
    </freud-input-mask>
`;

const Template: Story<FreudInputMaskComponent> = (args: FreudInputMaskComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Data = Template.bind({});
Data.args = {
  label: 'Label',
  value: '',
  mask: '99/99/9999'
};

export const CPF = Template.bind({});
CPF.args = {
  label: 'Label',
  value: '',
  mask: '999.999.999-99'
};

export const Celular = Template.bind({});
Celular.args = {
  label: 'Label',
  value: '',
  mask: '(99) 9 9999-9999'
};

export const Telefone = Template.bind({});
Telefone.args = {
  label: 'Label',
  value: '',
  mask: '(99) 9999-9999'
};

export const TelefoneError = Template.bind({});
TelefoneError.args = {
  label: 'Label',
  value: '9888',
  mask: '(99) 9999-9999',
  invalid: true,
  errorText: 'Telefone inválido'
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  mask: '99/99/9999'
};

// Accessibility
const TemplateAccessibility: Story<FreudInputMaskComponent> = (
  args: FreudInputMaskComponent,
) => ({
  props: { ...args },
  template: `
    <freud-input-mask
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [invalid]="invalid"
        [mask]="mask"
        [bgColor]="bgColor"
        [ariaLabel]="ariaLabel"
        [ariaLabelledBy]="ariaLabelledBy">
    </freud-input-mask>
`,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.args = {
  label: 'Data de nascimento',
  placeholder: 'DD/MM/AAAA',
  mask: '99/99/9999',
  ariaLabel: 'Campo para inserir data de nascimento no formato DD/MM/AAAA',
  ariaLabelledBy: 'birthdate-heading',
};
