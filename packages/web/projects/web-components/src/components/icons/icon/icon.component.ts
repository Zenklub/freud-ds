import { Component, Input, ViewEncapsulation } from '@angular/core';

export const FreudIconSizes = ['sm', 'md'] as const;
export type FreudIconSize = typeof FreudIconSizes[number];

@Component({
  selector: 'freud-icon',
  encapsulation: ViewEncapsulation.None,
  template: `<span [ngClass]="iconClasses"></span>`,
  styleUrls: ['./icon.component.scss'],
  host: {
    class: 'inline-flex',
  },
})
export class FreudIconComponent {
  @Input() icon: string = '';
  @Input() size: FreudIconSize = 'md';

  // Método para calcular as classes de estilo com base nas propriedades "icon" e "size"
  get iconClasses(): string[] {
    const classes = ['freud-icon'];
    if (this.icon) {
      classes.push(`freud-icon-${this.icon}`);
    }
    if (this.size === 'sm') {
      classes.push('freud-icon-sm');
    } else{
      classes.push('freud-icon-md');
    }
    
    return classes;
  }
}
