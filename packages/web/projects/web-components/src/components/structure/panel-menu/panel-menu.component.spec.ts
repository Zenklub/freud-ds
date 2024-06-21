import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudPanelMenuComponent } from './panel-menu.component';

describe('FreudPanelMenuComponent', () => {
  let component: FreudPanelMenuComponent;
  let fixture: ComponentFixture<FreudPanelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudPanelMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
