import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-icon',
  encapsulation: ViewEncapsulation.None,
  template: `<span [ngClass]="iconClasses"></span>`,
  styleUrls: ['./icon.component.scss'],
  host: {
    class: 'freud-icon',
  },
})
export class FreudIconComponent {
  @Input() icon: string = '';
  @Input() size: 'sm' | 'md' = 'md';

  constructor() {
    // Log para verificar se o componente está sendo inicializado corretamente
    console.log('FreudIconComponent constructor called');
  }

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
    
    // Log para verificar as classes CSS geradas
    console.log('Icon classes:', classes);
    
    return classes;
  }
}

