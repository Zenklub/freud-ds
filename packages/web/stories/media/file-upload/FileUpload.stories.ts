import { FreudFileUploadComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudFileUploadComponent> = (args: FreudFileUploadComponent) => ({
  props: { ...args },
  template: `
    <freud-file-upload
        [name]="'file[]'"
        [url]="url"
        [auto]="auto"
        [accept]="accept"
        [multiple]="multiple"
        [method]="method"
        [fileLimit]="fileLimit"
        [chooseIcon]="chooseIcon"
        [chooseLabel]="chooseLabel"
        [uploadLabel]="uploadLabel"
        [uploadIcon]="uploadIcon"
        [cancelIcon]="cancelIcon"
        [withCredentials]="withCredentials"
        [mode]="mode"
        [customUpload]="customUpload"
        [showUploadButton]="showUploadButton"
        [showCancelButton]="showCancelButton"
        [headers]="headers"
    ></freud-file-upload>
  `,
});

// With Label
export const Default = Template.bind({});
Default.args = {
  multiple: true,
  url: './upload.php',
};
export const BasicUi = Template.bind({});
BasicUi.args = {
  url: './upload.php',
  mode: 'basic',
  chooseLabel: ''
};


// BgColor
export const BgColor = Template.bind({});
BgColor.args = {
  multiple: true,
  url: './upload.php',
};
