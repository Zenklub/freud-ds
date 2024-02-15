import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudBlockUIComponent } from './block-ui.component';

describe('FreudCardComponent', () => {
  let component: FreudBlockUIComponent;
  let fixture: ComponentFixture<FreudBlockUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudBlockUIComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudBlockUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
