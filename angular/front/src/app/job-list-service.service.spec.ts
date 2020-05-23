import { TestBed } from '@angular/core/testing';

import { JobListServiceService } from './job-list-service.service';

describe('JobListServiceService', () => {
  let service: JobListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
