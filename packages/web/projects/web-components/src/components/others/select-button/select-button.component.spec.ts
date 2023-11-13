import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSelectButtonComponent } from './select-button.component';

describe('FreudSelectButtonComponent', () => {
  let component: FreudSelectButtonComponent;
  let fixture: ComponentFixture<FreudSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudSelectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
