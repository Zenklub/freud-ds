import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSelectComponent } from './select.component';

describe('FreudSelectComponent', () => {
  let component: FreudSelectComponent;
  let fixture: ComponentFixture<FreudSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
