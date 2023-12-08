import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudAccordionComponent } from './accordion.component';

describe('FreudSelectButtonComponent', () => {
  let component: FreudAccordionComponent;
  let fixture: ComponentFixture<FreudAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudAccordionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
