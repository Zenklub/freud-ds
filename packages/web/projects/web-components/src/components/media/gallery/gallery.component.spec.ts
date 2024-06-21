import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudGalleryComponent } from './gallery.component';

describe('FreudGalleryComponent', () => {
  let component: FreudGalleryComponent;
  let fixture: ComponentFixture<FreudGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudGalleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
