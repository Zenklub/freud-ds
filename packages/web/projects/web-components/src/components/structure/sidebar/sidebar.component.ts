import { Component, EventEmitter, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { DomHandler } from "primeng/dom/domhandler";

import { Sidebar } from "primeng/sidebar";


@Component ({
    selector: 'freud-sidebar',
    template: `
    <p-sidebar #sidebar
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
    ></p-sidebar>
    `,
    host: {
        class: 'freud-sidebar',
    }
})

export class FreudSidebarComponent {
    @Input() visible: boolean = false;
    @Input() position: string = 'left';
    @Input() fullScreen: boolean = false;
    @Input() baseZIndex: number = 0;
    @Input() autoZIndex: boolean = true;
    @Input() modal: boolean = false;
    @Input() dismissible: boolean = true;
    @Input() showCloseIcon: boolean = true;
    @Input() blockScroll: boolean = false;
    @Input() style: any = null;
    @Input() styleClass: string = 'p-sidebar';
    @Input() ariaCloseLabel: string = 'Close';
    @Input() closeOnEscape: boolean = true;
    @Input() rtl: boolean   = false;
    @Input() appendTo: any = null;
    @Input() transitionOptions: string  = '150ms ease-out';

    @Output() onShow: EventEmitter<any> = new EventEmitter();
    @Output() onHide: EventEmitter<any> = new EventEmitter();

    @ViewChild(Sidebar) sidebarViewChild!: Sidebar;

    constructor(public el: Sidebar, public renderer: Renderer2) {}

    ngAfterViewInit() {
        if (this.visible) {
            this.show();
        }
    }

    show() {
        this.sidebarViewChild.style.zIndex = String(this.baseZIndex);
        this.onShow.emit(null);
    }

    hide() {
        this.onHide.emit(null);
    }

    close(event: Event) {
        this.hide();
        event.preventDefault();
    }
}