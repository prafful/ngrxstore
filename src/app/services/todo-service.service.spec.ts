import { TestBed, inject } from '@angular/core/testing';

import { Services\todoServiceService } from './services\todo-service.service';

describe('Services\todoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\todoServiceService]
    });
  });

  it('should be created', inject([Services\todoServiceService], (service: Services\todoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
