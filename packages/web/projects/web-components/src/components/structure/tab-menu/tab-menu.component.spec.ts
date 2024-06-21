import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTabMenuComponent } from './tab-menu.component';

describe('FreudTabMenuComponent', () => {
  let component: FreudTabMenuComponent;
  let fixture: ComponentFixture<FreudTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudTabMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
