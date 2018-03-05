import { TestBed, inject } from '@angular/core/testing';

import { HomeAuthResolverService } from './home-auth-resolver.service';

describe('HomeAuthResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeAuthResolverService]
    });
  });

  it('should be created', inject([HomeAuthResolverService], (service: HomeAuthResolverService) => {
    expect(service).toBeTruthy();
  }));
});
