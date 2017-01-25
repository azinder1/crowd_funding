/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrowdfundService } from './crowdfund.service';

describe('CrowdfundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrowdfundService]
    });
  });

  it('should ...', inject([CrowdfundService], (service: CrowdfundService) => {
    expect(service).toBeTruthy();
  }));
});
