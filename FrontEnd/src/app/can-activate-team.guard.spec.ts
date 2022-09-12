import { TestBed } from '@angular/core/testing';

import { CanActivateTeamGuard } from './can-activate-team.guard';

describe('CanActivateTeamGuard', () => {
  let guard: CanActivateTeamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateTeamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
