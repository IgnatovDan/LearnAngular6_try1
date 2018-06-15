import { TestBed, inject } from '@angular/core/testing';

import { MymessageService } from './mymessage.service';

describe('MymessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MymessageService]
    });
  });

  it('should be created', inject([MymessageService], (service: MymessageService) => {
    expect(service).toBeTruthy();
  }));
});
