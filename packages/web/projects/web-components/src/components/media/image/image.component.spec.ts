import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudImageComponent } from './image.component';

describe('FreudImageComponent', () => {
  let component: FreudImageComponent;
  let fixture: ComponentFixture<FreudImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
