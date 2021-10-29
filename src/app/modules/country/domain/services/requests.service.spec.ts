import { TestBed } from '@angular/core/testing';

import { RequestsService } from './requests.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CountryStoreService} from "./country-store.service";
import {of} from "rxjs";

describe('RequestsService', () => {
  let service: RequestsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(RequestsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check searchCountries', () => {
    const spy = spyOn(service, 'getAllCountries');
    service.searchCountries('');
    expect(spy).toHaveBeenCalled();
  });

  it('should check searchCountries', () => {
    const spy = spyOn(httpClient, 'get').and.returnValue(of([]));
    service.searchCountries('Ervo');
    expect(spy).toHaveBeenCalled();
  });
});
