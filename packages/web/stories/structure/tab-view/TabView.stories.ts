import { FreudTabViewComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudTabViewComponent> = (args: FreudTabViewComponent) => ({
  props: { ...args },
  template: `
    <freud-tab-view
      [activeIndex]="activeIndex"
      [controlClose]="controlClose"
      [scrollable]="scrollable"
      [bgColor]="bgColor">
        <freud-tab-panel header="Header 1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </freud-tab-panel>
        <freud-tab-panel header="Header 2">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </freud-tab-panel>
        <freud-tab-panel header="Header 3">
            Content 3
        </freud-tab-panel>
    </freud-tab-view>
  `,
});

export const Default = Template.bind({});
Default.args = {
  activeIndex: 0
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  activeIndex: 0,
  scrollable: true
};

export const BGColor = Template.bind({});
BGColor.args = {
  activeIndex: 1,
  bgColor: true
};

const TemplateIcon: Story<FreudTabViewComponent> = (args: FreudTabViewComponent) => ({
  props: { ...args },
  template: `
    <freud-tab-view
      [activeIndex]="activeIndex"
      [controlClose]="controlClose"
      [scrollable]="scrollable"
      [bgColor]="bgColor">
        <freud-tab-panel header="Header 1" [rightIcon]="'freud-icon freud-icon-plus'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </freud-tab-panel>
        <freud-tab-panel header="Header 2" [rightIcon]="'freud-icon freud-icon-plus'">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </freud-tab-panel>
        <freud-tab-panel header="Header 3" [leftIcon]="'freud-icon freud-icon-plus'">
            Content 3
        </freud-tab-panel>
    </freud-tab-view>
  `,
});
export const Icon = TemplateIcon.bind({});
Icon.args = {
  activeIndex: 0,
};
