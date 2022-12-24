import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudChipComponent } from './chip.component';

describe('FreudCardComponent', () => {
  let component: FreudChipComponent;
  let fixture: ComponentFixture<FreudChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
