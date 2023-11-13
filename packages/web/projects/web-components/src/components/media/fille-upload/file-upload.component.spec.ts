import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudFileUploadComponent } from './file-upload.component';

describe('FreudFileUploadComponent', () => {
  let component: FreudFileUploadComponent;
  let fixture: ComponentFixture<FreudFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
