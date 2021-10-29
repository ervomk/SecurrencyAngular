import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CountryModel} from "../models/country.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryStoreService {

  $countries: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  $countriesPaginationCurrentPage: BehaviorSubject<number> = new BehaviorSubject<number>(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  $countriesResultsToShow: BehaviorSubject<number> = new BehaviorSubject<number>(environment.DEFAULT_PAGINATION_RESULTS_TO_SHOW);
  $countrySearchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  /**
   * Updates observable with value as input and sets pagination to 1 page.
   * @param countries
   */
  updateDataCountries(countries: CountryModel[] | null): void {
    this.$countries.next(countries);
    this.updateCountriesPaginationCurrentPage(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  }

  /**
   * Updates observable with value as input.
   * @param value
   */
  updateCountriesPaginationCurrentPage(value: number): void {
    this.$countriesPaginationCurrentPage.next(value);
  }

  /**
   * Updates observable with value as input.
   * Sets pagination to 1 page when user do search.
   * @param value
   */
  updateCountriesPaginationResultsToShow(value: number): void {
    this.$countriesResultsToShow.next(value);
    this.updateCountriesPaginationCurrentPage(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  }

  /**
   * Updates observable with value as input.
   * @param value
   */
  updateCountrySearchQuery(value: string): void {
    this.$countrySearchQuery.next(value);
  }
}
