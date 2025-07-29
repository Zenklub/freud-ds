import { Story } from '@storybook/angular';
import { FreudSwitchComponent } from '@freud-ds/web-components';

// Propriedades disponíveis no FreudSwitchComponent:
// - invalid: boolean (padrão: false)
// - disabled: boolean (padrão: false)
// - name: string (padrão: '')
// - falseValue: any (padrão: false)
// - trueValue: any (padrão: true)
// - required: boolean (padrão: false)
// - id: string (padrão: '')
// - custom: boolean (padrão: false)
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade

const value = false;

const templateHTML = `
      <freud-input-switch
        [(ngModel)]="defaultValue"
        [disabled]="disabled"
        [invalid]="invalid"
        [custom]="custom">
    </freud-input-switch>
`;

const Template: Story<FreudSwitchComponent> = (args: FreudSwitchComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: value,
};

export const BGColor = Template.bind({});
BGColor.args = {
  value: value,
};

export const Custom = Template.bind({});
Custom.args = {
  value: value,
  custom: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: value,
};

// Accessibility
const TemplateAccessibility: Story<FreudSwitchComponent> = (
  args: FreudSwitchComponent,
) => ({
  props: { ...args },
  template: `
      <freud-input-switch
        [(ngModel)]="defaultValue"
        [disabled]="disabled"
        [invalid]="invalid"
        [custom]="custom"
        [ariaLabel]="ariaLabel"
        [ariaLabelledBy]="ariaLabelledBy">
    </freud-input-switch>
`,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.args = {
  value: value,
  ariaLabel: 'Alternar notificações por email',
  ariaLabelledBy: 'notifications-heading',
};
