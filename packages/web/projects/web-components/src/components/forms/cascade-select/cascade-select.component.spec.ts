import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudCascadeSelectComponent } from './cascade-select.component';

describe('FreudSelectComponent', () => {
  let component: FreudCascadeSelectComponent;
  let fixture: ComponentFixture<FreudCascadeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudCascadeSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudCascadeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
