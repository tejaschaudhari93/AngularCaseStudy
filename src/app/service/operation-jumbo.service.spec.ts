import { TestBed, inject } from '@angular/core/testing';

import { OperationJumboService } from './operation-jumbo.service';

describe('OperationJumboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationJumboService]
    });
  });

  it('should be created', inject([OperationJumboService], (service: OperationJumboService) => {
    expect(service).toBeTruthy();
  }));
});
