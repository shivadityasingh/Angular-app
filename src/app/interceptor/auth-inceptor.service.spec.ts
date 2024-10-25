import { TestBed } from '@angular/core/testing';

import { AuthInceptorService } from './auth-inceptor.service';

describe('AuthInceptorService', () => {
  let service: AuthInceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
