import { TestBed } from '@angular/core/testing';

import { ColecoesService } from './colecoes.service';

describe('ColecoesService', () => {
  let service: ColecoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColecoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
