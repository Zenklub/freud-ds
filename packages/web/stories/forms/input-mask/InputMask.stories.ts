import { Story } from '@storybook/angular';
import { FreudInputMaskComponent } from '@freud-ds/web-components';

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
