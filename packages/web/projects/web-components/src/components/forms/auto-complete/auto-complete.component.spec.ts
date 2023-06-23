import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudAutoCompleteComponent } from './auto-complete.component';

describe('FreudSelectComponent', () => {
  let component: FreudAutoCompleteComponent;
  let fixture: ComponentFixture<FreudAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
