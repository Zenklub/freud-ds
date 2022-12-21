import { Story } from '@storybook/angular';
import { FreudInputPasswordComponent } from '@freud-ds/web-components';

const templateFeedback = `
  <div style="height: 130px">
          <freud-input-password
          [(ngModel)]="value"
          [disabled]="disabled"
          [label]="label"
          [feedback]="feedback"
          [placeholder]="placeholder"
          [invalid]="invalid"
          [bgColor]="bgColor">
      </freud-input-password>
  </div>
`;

const templateFull = `
    <div style="height: 350px">
        <freud-input-password
          [(ngModel)]="value"
          [disabled]="disabled"
          [label]="label"
          [feedback]="feedback"
          [placeholder]="placeholder"
          [invalid]="invalid"
          [bgColor]="bgColor">
            <ng-container freudTemplateHeader>
              <strong>Pick a password</strong>
            </ng-container>
            <ng-container freudTemplatefooter>
                <div>
                  <hr>
                  <p class="p-mt-2">Suggestions</p>
                  <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                  </ul>
                </div>
            </ng-container>
        </freud-input-password>
    </div>
`;

const templateHTML = `
    <freud-input-password
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [feedback]="feedback"
        [placeholder]="placeholder"
        [invalid]="invalid"
        [bgColor]="bgColor">
    </freud-input-password>
`;

const Template: Story<FreudInputPasswordComponent> = (args: FreudInputPasswordComponent) => ({
  props: { ...args },
  template: templateHTML,
});

const TemplateFeedback: Story<FreudInputPasswordComponent> = (args: FreudInputPasswordComponent) => ({
  props: { ...args },
  template: templateFeedback,
});

const TemplateFull: Story<FreudInputPasswordComponent> = (args: FreudInputPasswordComponent) => ({
  props: { ...args },
  template: templateFull,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
  feedback: false,
};

export const BGColor = TemplateFeedback.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
};
export const Feedback = TemplateFeedback.bind({});
Feedback.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  feedback: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  feedback: false,
};

export const CustomTemplate = TemplateFull.bind({});
CustomTemplate.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  feedback: true
};

