import { FreudSidebarComponent, FreudButtonComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const versions = {
  left: {
    position: 'left'
  },
  right: {
    position: 'right'
  },
  top: {
    position: 'top'
  },
  down: {
    position: 'down',
  },
  fullScreen: {
    fullScreen: true,
  },
  modal: {
    modal: true,
    showCloseIcon: false,
  },

}


const Template: Story<FreudSidebarComponent> = (args: FreudSidebarComponent) => ({
  props: { ...args },
  template: `
    <freud-sidebar
    [visible]="visible"
    [position]="position"
    [fullScreen]="fullScreen"
    [baseZIndex]="baseZIndex"
    [autoZIndex]="autoZIndex"
    [modal]="modal"
    [dismissible]="dismissible"
    [showCloseIcon]="showCloseIcon"
    [blockScroll]="blockScroll"
    [style]="style"
    [styleClass]="styleClass"
    [ariaCloseLabel]="ariaCloseLabel"
    [closeOnEscape]="closeOnEscape"
    [rtl]="rtl"
    [appendTo]="appendTo"
    [transitionOptions]="transitionOptions"
    ></freud-sidebar>
  `,
});

export const Default = Template.bind({});
Default.args = versions.left;

export const Right = Template.bind({});
Right.args = versions.right;

export const Top = Template.bind({});
Top.args = versions.top;7

export const Down = Template.bind({});
Down.args = versions.down;

export const FullScreen = Template.bind({});
FullScreen.args = versions.fullScreen;

export const Modal = Template.bind({});
Modal.args = versions.modal;

/**
export const BGColor = Template.bind({});
BGColor.args = {
  items: items,
  activeItem: items[0],
  bgColor: true
};
**/