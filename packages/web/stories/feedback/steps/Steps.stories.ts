import { Story } from '@storybook/angular';
import { FreudStepsComponent, StepMenu } from '@freud-ds/web-components';

const itens: StepMenu[] = [
  {label: 'Item1'},
  {label: 'Item2'},
  {label: 'Item3'},
  {label: 'Item4'}
]

const Template: Story<FreudStepsComponent> = (
  args: FreudStepsComponent
) => ({
  props: { ...args },
  template: `
    <freud-steps [model]="model" [readonly]="readonly" [activeIndex]="activeIndex" [bgColor]="bgColor"></freud-steps>
  `,
});

export const Default = Template.bind({});
Default.args = {
  readonly: true,
  activeIndex: 1,
  model: itens
};

export const BgColor = Template.bind({});
BgColor.args = {
  readonly: true,
  activeIndex: 0,
  model: itens,
  bgColor: true
};
