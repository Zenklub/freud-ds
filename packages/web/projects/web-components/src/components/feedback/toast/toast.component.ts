import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";

type positions = "top-right" | "top-left" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "center";

@Component({
  selector: 'freud-toast',
  template: `
    <p-toast [position]="position" [key]="key"></p-toast>
  `,
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-toast'
  }
})
export class FreudToastComponent {

  @Input() position: positions = 'top-right';
  @Input() key!: string;

}
