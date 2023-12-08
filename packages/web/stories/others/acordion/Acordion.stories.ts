import { Story } from '@storybook/angular';
import { FreudAccordionComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const Template: Story<FreudAccordionComponent> = (
  args: FreudAccordionComponent,
) => ({
  props: { ...args },
  template: `
    <freud-accordion [multiple]="multiple">
        <freud-accordion-tab header="Header I">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </freud-accordion-tab>
        <freud-accordion-tab header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </freud-accordion-tab>
        <freud-accordion-tab header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </freud-accordion-tab>
    </freud-accordion>
  `,
});

const TemplateDisabled: Story<FreudAccordionComponent> = (
  args: FreudAccordionComponent,
) => ({
  props: { ...args },
  template: `
    <freud-accordion [multiple]="multiple">
        <freud-accordion-tab header="Header I">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </freud-accordion-tab>
        <freud-accordion-tab header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </freud-accordion-tab>
        <freud-accordion-tab header="Header III" [disabled]="true">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </freud-accordion-tab>
    </freud-accordion>
  `,
});
export const Default = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};
export const Disabled = TemplateDisabled.bind({});

export const BGColor = Template.bind({});

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
