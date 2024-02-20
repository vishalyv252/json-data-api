import { TestBed } from '@angular/core/testing';

import { DataUserIdService } from './data-user-id.service';

describe('DataUserIdService', () => {
  let service: DataUserIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUserIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
