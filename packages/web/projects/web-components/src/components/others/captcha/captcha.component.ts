import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-captcha',
  template: `
    <p-captcha
      [siteKey]="siteKey"
      [theme]="theme"
      [type]="type"
      [size]="size"
      [initCallback]="initCallback"
      (onExpire)="onExpire.emit($event)"
      (onResponse)="onResponse.emit($event)"></p-captcha>
  `,
  styleUrls: ['./captcha.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-captcha',
  }
})
export class FreudCaptchaComponent implements OnInit {

  @Input() siteKey!: string;
  @Input() type: string = 'image';
  @Input() size: string = 'normal';
  @Input() autoLoadScript: boolean = false;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() initCallback: string = 'initRecaptcha';
  @Output() onResponse = new EventEmitter();
  @Output() onExpire = new EventEmitter();

  ngOnInit() {
    if (this.autoLoadScript) {
      this.loadScript();
    }
  }

  public loadScript() {
    let node = document.createElement('script');
    node.src = 'https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
