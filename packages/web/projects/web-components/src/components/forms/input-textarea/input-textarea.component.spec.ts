import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudInputTextAreaComponent } from './input-textarea.component';

describe('FreudInputTextComponent', () => {
  let component: FreudInputTextAreaComponent;
  let fixture: ComponentFixture<FreudInputTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudInputTextAreaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudInputTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
