import {Component, OnInit} from '@angular/core';
import {CountryAddToStorageService} from "../../domain/services/country-add-to-storage.service";
import {CountryModel} from "../../domain/models/country.model";
import {UtilitiesService} from "../../../../shared/services/utilities.service";

@Component({
  selector: 'scy-favorites-view',
  templateUrl: './svc-favorites-view.component.html',
  styleUrls: ['./svc-favorites-view.component.scss']
})
export class SvcFavoritesViewComponent implements OnInit {

  countries!: CountryModel[];

  constructor(
    private countryAddToStorageService: CountryAddToStorageService,
    private utilitiesService: UtilitiesService
  ) {
  }

  ngOnInit(): void {
    this.setCountriesFromStorage();
  }

  /**
   * Listens for a change of the component
   * and updates entry list.
   */
  handleEmitFavoritesDeleteEvent(): void {
    this.setCountriesFromStorage();
  }

  /**
   * Gets favorites from storage.
   */
  private setCountriesFromStorage(): void {
    this.countries = this.countryAddToStorageService.returnLocalStorageData();
  }

  /**
   * Tracks for ngfor and rendering element.
   * @param index
   * @param el
   */
  trackByMethod(index: number, el: any): number {
    return el.cca3;
  }
}
