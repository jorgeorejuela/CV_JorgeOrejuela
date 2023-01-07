import { TestBed } from '@angular/core/testing';

import { CvjorgeorejuelaService } from './cvjorgeorejuela.service';

describe('CvjorgeorejuelaService', () => {
  let service: CvjorgeorejuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvjorgeorejuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
