import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudPanelComponent } from './panel.component';

describe('FreudScrollPanelComponent', () => {
  let component: FreudPanelComponent;
  let fixture: ComponentFixture<FreudPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
