import { FreudToastComponent, FreudMessage } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';
import { HeadingBGColor } from "../../typography/typography.stories";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';

// Propriedades disponíveis no FreudToastComponent:
// - position: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center' | 'center' (padrão: 'top-right')
// - key: string (obrigatório)
// - url?: string
// - targetParam: '_blank' | '_self' | '_top' | '_parent' (padrão: '_blank')
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade

const Template: Story<FreudToastComponent> = (args: FreudToastComponent) => ({
  props: { ...args },
  template: `
    <freud-toast-examples>
    </freud-toast-examples>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'Theme'

// Accessibility
const TemplateAccessibility: Story<FreudToastComponent> = (args: FreudToastComponent) => ({
  props: { ...args },
  template: `
    <freud-toast-examples>
    </freud-toast-examples>
  `,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.storyName = 'Acessibilidade';

export default {
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule
      ]
    })
  ]
}
