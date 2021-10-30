import {TestBed} from '@angular/core/testing';

import {PaginationService} from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check maximumNumberOfPages', () => {
    expect(service.maximumNumberOfPages(50, 5)).toBe(10);
  });

  it('should check createPageArray', () => {
    expect(service.createPageArray(1, 5, 250, 7)).toEqual([
      {
        "label": 1,
        "value": 1
      },
      {
        "label": 2,
        "value": 2
      },
      {
        "label": 3,
        "value": 3
      },
      {
        "label": 4,
        "value": 4
      },
      {
        "label": 5,
        "value": 5
      },
      {
        "label": "...",
        "value": 6
      },
      {
        "label": 50,
        "value": 50
      }
    ]);
  });
});
