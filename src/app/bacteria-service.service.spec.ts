import { TestBed, inject } from '@angular/core/testing';

import { BacteriaService } from './bacteria-service.service';

describe('BacteriaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BacteriaService]
    });
  });

  it('should be created', inject([BacteriaService], (service: BacteriaService) => {
    expect(service).toBeTruthy();
  }));
});
