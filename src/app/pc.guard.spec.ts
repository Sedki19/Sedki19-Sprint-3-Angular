import { TestBed } from '@angular/core/testing';

import { PcGuard } from './pc.guard';

describe('ProduitGuard', () => {
  let guard: PcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
