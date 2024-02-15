import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudCardComponent } from './card.component';

describe('FreudCardComponent', () => {
  let component: FreudCardComponent;
  let fixture: ComponentFixture<FreudCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
