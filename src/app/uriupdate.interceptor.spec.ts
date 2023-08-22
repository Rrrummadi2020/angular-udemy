import { TestBed } from '@angular/core/testing';

import { UriupdateInterceptor } from './uriupdate.interceptor';

describe('UriupdateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UriupdateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UriupdateInterceptor = TestBed.inject(UriupdateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
