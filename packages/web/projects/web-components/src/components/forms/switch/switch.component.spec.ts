import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSwitchComponent } from './switch.component';

describe('FreudSwitchComponent', () => {
  let component: FreudSwitchComponent;
  let fixture: ComponentFixture<FreudSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
