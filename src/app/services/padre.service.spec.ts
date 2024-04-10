import { TestBed } from '@angular/core/testing';

import { PadreService } from './padre.service';

describe('PadreService', () => {
  let service: PadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    expect(service.heroes_avengers.length).toBeGreaterThan(0);
  });

  it('should get one hero', () => {
    expect(service.heroes_avengers.length).toBeGreaterThan(0);
  });

});
