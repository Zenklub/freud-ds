import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildCheckboxComponent } from './guild-checkbox.component';

describe('FreudCheckboxComponent', () => {
  let component: GuildCheckboxComponent;
  let fixture: ComponentFixture<GuildCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve disparar onChange quando clicar no div', () => {
    component.onChange = jasmine.createSpy();

    fixture.nativeElement.querySelector('div').click();

    expect(component.onChange).toHaveBeenCalled();
  });

  it('deve alterar o valor de checked quando clicar no div', () => {
    component.checked = false;

    fixture.nativeElement.querySelector('div').click();

    expect(component.checked).toBeTrue();
  });

  it('deve alterar o valor de checked quando clicar no span', () => {
    component.checked = false;

    fixture.nativeElement.querySelector('span').click();

    expect(component.checked).toBeTrue();
  });

  it('deve renderizar com o texto igual a label', () => {
    component.label = 'test label';
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label');

    expect(label.textContent).toEqual(component.label);
  });

});
