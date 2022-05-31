import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: FreudTagComponent;
  let fixture: ComponentFixture<FreudTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
