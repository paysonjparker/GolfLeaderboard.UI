import { TestBed } from '@angular/core/testing';

import { GolfCourseServiceService } from './golf-course-service.service';

describe('GolfCourseServiceService', () => {
  let service: GolfCourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolfCourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
