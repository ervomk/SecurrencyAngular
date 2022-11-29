import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CountryModel} from "../models/country.model";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryStoreService {

  public countries$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public countriesPaginationCurrentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  public countriesResultsToShow$: BehaviorSubject<number> = new BehaviorSubject<number>(environment.DEFAULT_PAGINATION_RESULTS_TO_SHOW);
  public countriesShowNoResults$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public countrySearchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  /**
   * Updates observable with value as input and sets pagination to 1 page.
   * @param countries
   */
  public updateDataCountries(countries: CountryModel[] | null): void {
    this.countries$.next(countries);
    this.updateCountriesPaginationCurrentPage(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  }

  /**
   * Updates observable with value as input.
   * @param value
   */
  public updateCountriesPaginationCurrentPage(value: number): void {
    this.countriesPaginationCurrentPage$.next(value);
  }

  /**
   * Updates observable with value as input.
   * Sets pagination to 1 page when user do search.
   * @param value
   */
  public updateCountriesPaginationResultsToShow(value: number): void {
    this.countriesResultsToShow$.next(value);
    this.updateCountriesPaginationCurrentPage(environment.DEFAULT_INITIAL_PAGINATION_PAGE);
  }

  /**
   * Updates observable with value as input.
   * @param value
   */
  public updateCountrySearchQuery(value: string): void {
    this.countrySearchQuery$.next(value);
  }

  /**
   * Sets value to loading observable.
   * @param value
   */
  public setLoading(value: boolean): void {
    this.isLoading$.next(value);
  }

  /**
   * Sets value to error no results observable.
   * @param value
   */
  public updateCountriesShowNoResults(value: boolean): void {
    this.updateDataCountries(null);
    this.countriesShowNoResults$.next(value);
  }
}
