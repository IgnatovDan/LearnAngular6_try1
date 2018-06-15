import { TestBed, inject } from '@angular/core/testing';

import { MyheroService } from './myhero.service';

describe('MyheroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyheroService]
    });
  });

  it('should be created', inject([MyheroService], (service: MyheroService) => {
    expect(service).toBeTruthy();
  }));
});
