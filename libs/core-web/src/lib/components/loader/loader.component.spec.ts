import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudLoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: FreudLoaderComponent;
  let fixture: ComponentFixture<FreudLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
