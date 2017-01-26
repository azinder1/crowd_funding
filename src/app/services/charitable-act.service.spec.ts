/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharitableActService } from './charitable-act.service';

describe('CharitableActService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharitableActService]
    });
  });

  it('should ...', inject([CharitableActService], (service: CharitableActService) => {
    expect(service).toBeTruthy();
  }));
});
