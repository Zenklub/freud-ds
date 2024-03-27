import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudMultiSelectComponent } from './multi-select.component';

describe('FreudSelectComponent', () => {
  let component: FreudMultiSelectComponent;
  let fixture: ComponentFixture<FreudMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudMultiSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
