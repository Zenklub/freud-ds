import { Story } from '@storybook/angular';

import { FreudTypographyComponent } from '@freud-ds/web-components';

const Template: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
    <p freud-typography [fontType]="fontType" [fontBgColor]="fontBgColor">{{label}}</p>
  `
});
export const HeadingBGColor = Template.bind({});
HeadingBGColor.storyName = 'BG Color'
HeadingBGColor.args = {
  fontType: 'h1BoldAuto',
  fontBgColor: true
};

export const BGColor = Template.bind({});
BGColor.args = {
  fontType: 'bodyRegular1-5',
  fontBgColor: true
};

const TemplateRegular: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Regular1-5'">h6/regular-400/line-height-1.5 (h6Regular1-5)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Regular1-5'">h5/regular-400/line-height-1.5 (h5Regular1-5)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Regular1-5'">h4/regular-400/line-height-1.5 (h4Regular1-5)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Regular1-5'">h3/regular-400/line-height-1.5 (h3Regular1-5)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Regular1-5'">h2/regular-400/line-height-1.5 (h2Regular1-5)</p>
    <p freud-typography [fontType]="'h1Regular1-5'">h1/regular-400/line-height-1.5 (h1Regular1-5)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Regular1-2'">h6/regular-400/line-height-1.2 (h6Regular1-2)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Regular1-2'">h5/regular-400/line-height-1.2 (h5Regular1-2)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Regular1-2'">h4/regular-400/line-height-1.2 (h4Regular1-2)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Regular1-2'">h3/regular-400/line-height-1.2 (h3Regular1-2)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Regular1-2'">h2/regular-400/line-height-1.2 (h2Regular1-2)</p>
    <p freud-typography [fontType]="'h1Regular1-2'">h1/regular-400/line-height-1.2 (h1Regular1-2)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Regular1'">h6/regular-400/line-height-1 (h6Regular1)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Regular1'">h5/regular-400/line-height-1 (h5Regular1)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Regular1'">h4/regular-400/line-height-1 (h4Regular1)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Regular1'">h3/regular-400/line-height-1 (h3Regular1)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Regular1'">h2/regular-400/line-height-1 (h2Regular1)</p>
    <p freud-typography [fontType]="'h1Regular1'">h1/regular-400/line-height-1 (h1Regular1)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h6RegularAuto'">h6/regular-400/line-height-Auto (h6RegularAuto)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h5RegularAuto'">h5/regular-400/line-height-Auto (h5RegularAuto)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h4RegularAuto'">h4/regular-400/line-height-Auto (h4RegularAuto)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h3RegularAuto'">h3/regular-400/line-height-Auto (h3RegularAuto)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'h2RegularAuto'">h2/regular-400/line-height-Auto (h2RegularAuto)</p>
    <p freud-typography [fontType]="'h1RegularAuto'">h1/regular-400/line-height-auto (h1RegularAuto)</p>
  `
});

export const HeadingRegular = TemplateRegular.bind({});

// Heading semibold
const TemplateSemibold: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Semibold1-5'">h6/Semibold-600/line-height-1.5 (h6Semibold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Semibold1-5'">h5/Semibold-600/line-height-1.5 (h5Semibold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Semibold1-5'">h4/Semibold-600/line-height-1.5 (h4Semibold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Semibold1-5'">h3/Semibold-600/line-height-1.5 (h3Semibold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Semibold1-5'">h2/Semibold-600/line-height-1.5 (h2Semibold1-5)</p>
  <p freud-typography [fontType]="'h1Semibold1-5'">h1/Semibold-600/line-height-1.5 (h1Semibold1-5)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Semibold1-2'">h6/Semibold-600/line-height-1.2 (h6Semibold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Semibold1-2'">h5/Semibold-600/line-height-1.2 (h5Semibold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Semibold1-2'">h4/Semibold-600/line-height-1.2 (h4Semibold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Semibold1-2'">h3/Semibold-600/line-height-1.2 (h3Semibold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Semibold1-2'">h2/Semibold-600/line-height-1.2 (h2Semibold1-2)</p>
  <p freud-typography [fontType]="'h1Semibold1-2'">h1/Semibold-600/line-height-1.2 (h1Semibold1-2)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Semibold1'">h6/Semibold-600/line-height-1 (h6Semibold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Semibold1'">h5/Semibold-600/line-height-1 (h5Semibold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Semibold1'">h4/Semibold-600/line-height-1 (h4Semibold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Semibold1'">h3/Semibold-600/line-height-1 (h3Semibold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Semibold1'">h2/Semibold-600/line-height-1 (h2Semibold1)</p>
  <p freud-typography [fontType]="'h1Semibold1'">h1/Semibold-600/line-height-1 (h1Regular1)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6SemiboldAuto'">h6/Semibold-600/line-height-Auto (h6SemiboldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5SemiboldAuto'">h5/Semibold-600/line-height-Auto (h5SemiboldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4SemiboldAuto'">h4/Semibold-600/line-height-Auto (h4SemiboldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3SemiboldAuto'">h3/Semibold-600/line-height-Auto (h3SemiboldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2SemiboldAuto'">h2/Semibold-600/line-height-Auto (h2SemiboldAuto)</p>
  <p freud-typography [fontType]="'h1SemiboldAuto'">h1/Semibold-600/line-height-auto (h1RegularAuto)</p>
  `
});

export const HeadingSemibold = TemplateSemibold.bind({});

// Heading Bold
const TemplateBold: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Bold1-5'">h6/Bold-700/line-height-1.5 (h6Bold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Bold1-5'">h5/Bold-700/line-height-1.5 (h5Bold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Bold1-5'">h4/Bold-700/line-height-1.5 (h4Bold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Bold1-5'">h3/Bold-700/line-height-1.5 (h3Bold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Bold1-5'">h2/Bold-700/line-height-1.5 (h2Bold1-5)</p>
  <p freud-typography [fontType]="'h1Bold1-5'">h1/Bold-700//line-height-1.5 (h1Bold1-5)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Bold1-2'">h6/Bold-700/line-height-1.2 (h6Bold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Bold1-2'">h5/Bold-700/line-height-1.2 (h5Bold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Bold1-2'">h4/Bold-700/line-height-1.2 (h4Bold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Bold1-2'">h3/Bold-700/line-height-1.2 (h3Bold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Bold1-2'">h2/Bold-700/line-height-1.2 (h2Bold1-2)</p>
  <p freud-typography [fontType]="'h1Bold1-2'">h1/Bold-700/line-height-1.2 (h1Bold1-2)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6Bold1'">h6/Bold-700/line-height-1 (h6Bold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5Bold1'">h5/Bold-700/line-height-1 (h5Bold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4Bold1'">h4/Bold-700/line-height-1 (h4Bold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3Bold1'">h3/Bold-700/line-height-1 (h3Bold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2Bold1'">h2/Bold-700/line-height-1 (h2Bold1)</p>
  <p freud-typography [fontType]="'h1Bold1'">h1/Bold-700/line-height-1 (h1Bold1)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h6BoldAuto'">h6/Bold-700/line-height-Auto (h6BoldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h5BoldAuto'">h5/Bold-700/line-height-Auto (h5BoldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h4BoldAuto'">h4/Bold-700/line-height-Auto (h4BoldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h3BoldAuto'">h3/Bold-700/line-height-Auto (h3BoldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'h2BoldAuto'">h2/Bold-700/line-height-Auto (h2BoldAuto)</p>
  <p freud-typography [fontType]="'h1BoldAuto'">h1/Bold-700/line-height-auto (h1BoldAuto)</p>
  `
});

export const HeadingBold = TemplateBold.bind({});

// Text
// Text Regular
const TemplateTextRegular: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
    <p style="margin-bottom: 8px" freud-typography [fontType]="'smallRegular1-5'">small/regular-400/line-height-1.5 (smallRegular1-5)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyRegular1-5'">body/regular-400/line-height-1.5 (bodyRegular1-5)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'smallRegular1-2'">small/regular-400/line-height-1.2 (smallRegular1-2)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyRegular1-2'">body/regular-400/line-height-1.2 (bodyRegular1-2)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'smallRegular1'">small/regular-400/line-height-1 (smallRegular1)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyRegular1'">body/regular-400/line-height-1 (bodyRegular1)</p>

    <br><br>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'smallRegularAuto'">small/regular-400/line-height-Auto (smallRegularAuto)</p>
    <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyRegularAuto'">body/regular-400/line-height-Auto (bodyRegularAuto)</p>
  `
});

export const TextRegular = TemplateTextRegular.bind({});

// Text semibold
const TemplateTextSemibold: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallSemibold1-5'">small/Semibold-600/line-height-1.5 (smallSemibold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodySemibold1-5'">body/Semibold-600/line-height-1.5 (bodySemibold1-5)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallSemibold1-2'">small/Semibold-600/line-height-1.2 (smallSemibold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodySemibold1-2'">body/Semibold-600/line-height-1.2 (bodySemibold1-2)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallSemibold1'">small/Semibold-600/line-height-1 (smallSemibold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodySemibold1'">body/Semibold-600/line-height-1 (bodySemibold1)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallSemiboldAuto'">small/Semibold-600/line-height-Auto (smallSemiboldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodySemiboldAuto'">body/Semibold-600/line-height-Auto (bodySemiboldAuto)</p>
  `
});

export const TextSemibold = TemplateTextSemibold.bind({});

// Text Bold
const TemplateTextBold: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallBold1-5'">small/Bold-700/line-height-1.5 (smallBold1-5)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyBold1-5'">body/Bold-700/line-height-1.5 (bodyBold1-5)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallBold1-2'">small/Bold-700/line-height-1.2 (smallBold1-2)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyBold1-2'">body/Bold-700/line-height-1.2 (bodyBold1-2)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallBold1'">small/Bold-700/line-height-1 (smallBold1)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyBold1'">body/Bold-700/line-height-1 (bodyBold1)</p>

  <br><br>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'smallBoldAuto'">small/Bold-700/line-height-Auto (smallBoldAuto)</p>
  <p style="margin-bottom: 8px" freud-typography [fontType]="'bodyBoldAuto'">body/Bold-700/line-height-Auto (bodyBoldAuto)</p>
  `
});

export const TextBold = TemplateTextBold.bind({});
