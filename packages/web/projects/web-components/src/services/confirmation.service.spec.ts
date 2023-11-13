import { TestBed } from '@angular/core/testing';

import { FreudConfirmationService } from './confirmation.service';

describe('FreudConfirmationService', () => {
  let service: FreudConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreudConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
