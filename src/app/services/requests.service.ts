import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryStoreService} from "./country-store.service";
import {CountryModel} from "../models/country.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient,
              private countryMiniStore: CountryStoreService) {
  }

  /**
   * Makes API call to fetch all countries and sets them in the country store.
   * @param callback
   */
  getAllCountries(callback?: Function): void {
    if (!this.countryMiniStore.$countries.getValue()) {
      (this.httpClient.get(environment.API.COUNTRIES_ALL) as Observable<CountryModel[]>).toPromise().then((result: CountryModel[]) => {
        this.countryMiniStore.updateDataCountries(result);
        return callback;
      }, (error: any) => {
        // Handle error here...
      })
    }
  }

  /**
   * Makes API call with search query and sets result to country store.
   * If no query is provided, we show all results.
   * @param query
   * @param callback
   */
  searchCountries(query: string, callback?: Function): void {
    if (query) {
      (this.httpClient.get(`${environment.API.COUNTRIES_SEARCH}${query}`) as Observable<CountryModel[]>).toPromise().then((result: CountryModel[]) => {
        this.countryMiniStore.updateDataCountries(result);
        return callback;
      }, (error: any) => {
        // Handle error here...
      })
    } else {
      // We reset the store and then execute the request to fetch all countries again.
      this.countryMiniStore.updateDataCountries(null);
      this.getAllCountries();
    }
  }
}
