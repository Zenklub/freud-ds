import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSplitButtonComponent } from './split-button.component';

describe('FreudSplitButtonComponent', () => {
  let component: FreudSplitButtonComponent;
  let fixture: ComponentFixture<FreudSplitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSplitButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSplitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
