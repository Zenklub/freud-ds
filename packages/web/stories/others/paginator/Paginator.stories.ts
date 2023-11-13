import { Story } from '@storybook/angular';
import { FreudPaginatorComponent } from "@freud-ds/web-components";

const Template: Story<FreudPaginatorComponent> = (args: FreudPaginatorComponent) => ({
  props: { ...args },
  template: `<freud-paginator
    [rows]="rows"
    [totalRecords]="totalRecords"
    [pageLinkSize]="pageLinkSize"
    [first]="first"
    [showFirstLastIcon]="showFirstLastIcon"
    [alwaysShow]="alwaysShow"
    [currentPageReportTemplate]="currentPageReportTemplate"
    [showCurrentPageReport]="showCurrentPageReport"
    [bgColor]="bgColor">
    </freud-paginator>`,
});
export const Default = Template.bind({});
Default.args = {
  bgColor: false,
  rows: 5,
  totalRecords: 100,
  pageLinkSize: 4,
  first: 0,
  showFirstLastIcon: true,
  alwaysShow: true
}

export const PageReport = Template.bind({});
PageReport.args = {
  bgColor: false,
  rows: 5,
  totalRecords: 100,
  pageLinkSize: 4,
  showCurrentPageReport: true,
  currentPageReportTemplate: '({currentPage} de {totalPages})',
  first: 0,
  showFirstLastIcon: true,
  alwaysShow: true
}

export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true,
  rows: 5,
  totalRecords: 100,
  pageLinkSize: 4,
  first: 0,
  showFirstLastIcon: true,
  alwaysShow: true
}
