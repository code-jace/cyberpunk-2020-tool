import { TestBed } from '@angular/core/testing';

import { CharGenService } from './char-gen.service';

describe('CharGenService', () => {
  let service: CharGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
