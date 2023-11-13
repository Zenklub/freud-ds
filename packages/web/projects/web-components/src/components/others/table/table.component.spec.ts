import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTableComponent } from './table.component';

describe('FreudCardComponent', () => {
  let component: FreudTableComponent;
  let fixture: ComponentFixture<FreudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
