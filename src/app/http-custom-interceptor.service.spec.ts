import { TestBed, inject } from '@angular/core/testing';

import { HttpCustomInterceptorService } from './http-custom-interceptor.service';

describe('HttpCustomInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCustomInterceptorService]
    });
  });

  it('should be created', inject([HttpCustomInterceptorService], (service: HttpCustomInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
