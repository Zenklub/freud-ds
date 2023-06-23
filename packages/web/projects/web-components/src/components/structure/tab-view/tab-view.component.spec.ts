import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTabViewComponent } from './tab-view.component';

describe('FreudTabViewComponent', () => {
  let component: FreudTabViewComponent;
  let fixture: ComponentFixture<FreudTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudTabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
