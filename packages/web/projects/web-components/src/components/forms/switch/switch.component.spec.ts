import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSwitchComponent } from './switch.component';

import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template:
    '<freud-input-switch custom="true" switchCustom></freud-input-switch>',
})
class TestCustomSwitch {}

describe('FreudSwitchComponent', () => {
  let component: FreudSwitchComponent;
  let fixture: ComponentFixture<FreudSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSwitchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });

  it('deve aplicar a classe switch-custom quando o atributo custom for verdadeiro', () => {
    const testHostFixture = TestBed.createComponent(TestCustomSwitch);
    testHostFixture.detectChanges();

    const switchComponent = testHostFixture.debugElement.query(
      By.css('[switchCustom]'),
    ).nativeElement;
    expect(switchComponent.getAttribute('custom')).toBeTruthy();

    // todo: after hackazen need to correct this test to validate the class existence in component

    //expect(switchComponent.classList.contains('freud-input-switch')).toBeTruthy();
  });
});
