import { Story, applicationConfig } from '@storybook/angular';
import { FreudDialogExampleComponent } from './dialog-example/example.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

// Propriedades disponíveis no FreudDialogComponent:
// - header: string (padrão: '')
// - modal: boolean (padrão: false)
// - draggable: boolean (padrão: true)
// - resizable: boolean (padrão: false)
// - showHeader: boolean (padrão: true)
// - maximizable: boolean (padrão: false)
// - closable: boolean (padrão: true)
// - position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' (padrão: 'center')
// - closeIcon: string (padrão: 'freud-icon freud-icon-times')
// - minimizeIcon: string (padrão: 'freud-icon freud-icon-window-minimize')
// - maximizeIcon: string (padrão: 'freud-icon freud-icon-window-maximize')
// - focusTrap: boolean (padrão: true)
// - focusOnShow: boolean (padrão: true)
// - closeAriaLabel: string (padrão: 'Fechar modal') - Propriedade de acessibilidade
// - closeTabindex: string (padrão: '0') - Propriedade de acessibilidade
// - closeOnEscape: boolean (padrão: true)

const Template: Story<FreudDialogExampleComponent> = (
  args: FreudDialogExampleComponent,
) => ({
  props: { ...args },
  template: `
    <div style="min-height: 400px;">
      <freud-dialog-example [view]="view"></freud-dialog-example>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  view: 'basic',
};
export const Modal = Template.bind({});
Modal.args = {
  view: 'modal',
};

export const Maximizable = Template.bind({});
Maximizable.args = {
  view: 'maximizable',
};

// Accessibility
const TemplateAccessibility: Story<FreudDialogExampleComponent> = (
  args: FreudDialogExampleComponent,
) => ({
  props: { ...args },
  template: `
    <div style="min-height: 400px;">
      <freud-dialog-example [view]="view"></freud-dialog-example>
    </div>
  `,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.storyName = 'Acessibilidade';
WithAccessibility.args = {
  view: 'accessibility',
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
