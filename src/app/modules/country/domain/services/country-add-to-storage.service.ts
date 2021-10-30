import {Injectable} from '@angular/core';
import {CountryModel} from "../models/country.model";
import {LocalStorageService} from "../../../../shared/services/local-storage.service";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryAddToStorageService {

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  /**
   * Adds country to favorites.
   * @param country
   */
  addToFavorites(country: CountryModel): void {
    let currentData: CountryModel[] = this.returnLocalStorageData();

    // Initially we may not have data, we make it ready for pushing data.
    if (!currentData) {
      currentData = [];
    }

    currentData.push(country);

    this.setDataToStorage(currentData);
  }

  /**
   * Removes data from storage via cc3 id.
   * @param countryCc3
   */
  removeFromFavorites(countryCc3: string): void {
    const currentData: CountryModel[] = this.returnLocalStorageData();
    currentData.splice(currentData.findIndex((item: CountryModel) => item.cca3 === countryCc3), 1);
    this.setDataToStorage(currentData);
  }

  /**
   * Based on cc3 id, check whether the country is favorited.
   * @param countryCc3
   */
  checkIfEntryIsFavorited(countryCc3: string): boolean {
    const currentData: CountryModel[] = this.returnLocalStorageData();
    if (currentData) {
      return currentData.findIndex((item: CountryModel) => item.cca3 === countryCc3) !== -1;
    } else {
      return false;
    }
  }

  /**
   * Returns data froom storage.
   * We can cache this get if we want (TODO) :D
   */
  returnLocalStorageData(): CountryModel[] {
    return this.localStorageService.get(environment.FAVORITES_LOCALSTORAGE_KEY, true);
  }

  /**
   * Sets fresh data back to storage.
   * @param currentData
   * @private
   */
  private setDataToStorage(currentData: CountryModel[]): void {
    this.localStorageService.set(environment.FAVORITES_LOCALSTORAGE_KEY, JSON.stringify(currentData));
  }
}
