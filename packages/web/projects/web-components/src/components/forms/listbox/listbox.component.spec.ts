import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudListboxComponent } from './listbox.component';

describe('FreudSelectComponent', () => {
  let component: FreudListboxComponent;
  let fixture: ComponentFixture<FreudListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudListboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
