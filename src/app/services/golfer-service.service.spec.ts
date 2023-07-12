import { TestBed } from '@angular/core/testing';

import { GolferServiceService } from './golfer-service.service';

describe('GolferServiceService', () => {
  let service: GolferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
