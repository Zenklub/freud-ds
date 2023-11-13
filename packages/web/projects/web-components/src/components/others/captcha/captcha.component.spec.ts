import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudCaptchaComponent } from './captcha.component';

describe('FreudCaptchaComponent', () => {
  let component: FreudCaptchaComponent;
  let fixture: ComponentFixture<FreudCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
