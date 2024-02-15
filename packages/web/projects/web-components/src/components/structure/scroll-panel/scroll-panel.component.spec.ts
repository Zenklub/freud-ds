import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudScrollPanelComponent } from './scroll-panel.component';

describe('FreudScrollPanelComponent', () => {
  let component: FreudScrollPanelComponent;
  let fixture: ComponentFixture<FreudScrollPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudScrollPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudScrollPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
