import { TestBed, inject } from '@angular/core/testing';

import { ExpertsService } from './experts.service';

describe('ExpertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertsService]
    });
  });

  it('should be created', inject([ExpertsService], (service: ExpertsService) => {
    expect(service).toBeTruthy();
  }));
});
