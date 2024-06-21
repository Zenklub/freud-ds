import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSlideMenuComponent } from './slide-menu.component';

describe('FreudSlideMenuComponent', () => {
  let component: FreudSlideMenuComponent;
  let fixture: ComponentFixture<FreudSlideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSlideMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSlideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
