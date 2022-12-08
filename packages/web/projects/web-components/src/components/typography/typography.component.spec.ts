import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTypographyComponent, types } from './typography.component';

describe('TypographyComponent', () => {
  let component: FreudTypographyComponent;
  let fixture: ComponentFixture<FreudTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudTypographyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve atribuir corretamente classes de estilo', () => {
    const getClass = (className: string) =>
      fixture.debugElement.classes[className];

    expect(getClass('freud-typography')).toBe(true);
    types.forEach((type) => {
      component.fontType = type;
      fixture.detectChanges();
      expect(getClass(`${type}`)).toBe(true);
    });
  });
});
