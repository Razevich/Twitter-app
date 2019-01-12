import { TestBed } from '@angular/core/testing';

import { FetchTweetsService } from './fetch-tweets.service';

describe('FetchTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTweetsService = TestBed.get(FetchTweetsService);
    expect(service).toBeTruthy();
  });
});
