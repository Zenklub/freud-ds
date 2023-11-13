import { TestBed } from '@angular/core/testing';

import { FreudMessageService } from './message.service';

describe('FreudMessageService', () => {
  let service: FreudMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreudMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
