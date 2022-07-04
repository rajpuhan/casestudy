import { TestBed } from '@angular/core/testing';

import { CountSubjectService } from './count-subject.service';

describe('CountSubjectService', () => {
  let service: CountSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
