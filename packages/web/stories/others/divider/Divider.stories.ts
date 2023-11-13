import { Story } from '@storybook/angular';
import { FreudDividerComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-divider
        [tabindex]="tabindex"
        [layout]="layout"
        [bgColor]="bgColor">
        Title
    </freud-divider>
`;

const Template: Story<FreudDividerComponent> = (args: FreudDividerComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});

const TemplateHorizontal: Story<FreudDividerComponent> = (args: FreudDividerComponent) => ({
  props: { ...args },
  template: `
      <freud-divider
          [tabindex]="tabindex"
          [layout]="'horizontal'"
          [align]="'left'">
            Title
      </freud-divider><br>
      <freud-divider
          [tabindex]="tabindex"
          [layout]="'horizontal'"
          [align]="'center'">
            Title
      </freud-divider><br>
      <freud-divider
          [tabindex]="tabindex"
          [layout]="'horizontal'"
          [align]="'right'">
            Title
      </freud-divider>
  `,
});
export const Horizontal = TemplateHorizontal.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true
};

const TemplateVertical: Story<FreudDividerComponent> = (args: FreudDividerComponent) => ({
  props: { ...args },
  template: `
      <div style="display: flex;gap: 16px;height: 220px">
        <freud-divider
            [tabindex]="tabindex"
            [layout]="'vertical'"
            [align]="'top'">
              Title
        </freud-divider>
        <freud-divider
            [tabindex]="tabindex"
            [layout]="'vertical'"
            [align]="'bottom'">
              Title
        </freud-divider>
      </div>
  `,
});
export const Vertical = TemplateVertical.bind({});

