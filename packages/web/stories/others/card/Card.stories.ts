import { Story } from '@storybook/angular';
import { FreudCardComponent } from '@freud-ds/web-components';

const Template: Story<FreudCardComponent> = (args: FreudCardComponent) => ({
  props: { ...args },
  template: `
    <freud-card
        [header]="header"
        [subheader]="subheader"
        [tabindex]="tabindex">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </freud-card>
  `,
});
export const Default = Template.bind({});
Default.args = {
  header: 'Simple Card',
};

const TemplateAdvanced: Story<FreudCardComponent> = (
  args: FreudCardComponent,
) => ({
  props: { ...args },
  template: `
    <div style="width: 350px">
      <freud-card
          [header]="header"
          [subheader]="subheader"
          [tabindex]="tabindex">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!

            <ng-container freudTemplateHeader>
              <img alt="Card" src="assets/img/img.png" style="height: 150px;object-fit: cover">
            </ng-container>

            <ng-container freudTemplatefooter>
              <div style="display: flex; gap: 4px">
                <freud-button>Button</freud-button>
                <freud-button [color]="'secondary'">Button</freud-button>
              </div>
          </ng-container>
      </freud-card>
    </div>
  `,
});
export const Advanced = TemplateAdvanced.bind({});
Advanced.args = {
  header: 'Advanced Card',
  subheader: 'Card Subheader',
};

export const BGColor = TemplateAdvanced.bind({});
BGColor.args = {
  header: 'Advanced Card',
  subheader: 'Card Subheader',
};
