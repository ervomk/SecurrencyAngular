import {TestBed} from '@angular/core/testing';
import {CountryStoreService} from "./country-store.service";

describe('CountryStoreService', () => {
  let service: CountryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check updateDataCountries', () => {
    const spy = spyOn(service.$countries, 'next');
    const spyMethod = spyOn(service, 'updateCountriesPaginationCurrentPage');
    service.updateDataCountries([]);
    expect(spy).toHaveBeenCalled();
    expect(spyMethod).toHaveBeenCalled();
  });
});
