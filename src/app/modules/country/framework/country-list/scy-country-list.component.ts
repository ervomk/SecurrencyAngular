import {Component, OnInit} from '@angular/core';
import {RequestsService} from "../../domain/services/requests.service";
import {CountryStoreService} from "../../domain/services/country-store.service";
import {UtilitiesService} from "../../../../shared/services/utilities.service";

@Component({
  selector: 'scy-country-list',
  templateUrl: './scy-country-list.component.html',
  styleUrls: ['./scy-country-list.component.scss']
})
export class ScyCountryListComponent implements OnInit {

  constructor(
    private request: RequestsService,
    public countryMiniStore: CountryStoreService,
    private utilitiesService: UtilitiesService,
  ) {
  }

  ngOnInit(): void {
    // This is how we handle edge case where user can write something with no results,
    // in the meantime click on the detailed view, and when
    // go back we won't reload data since the search query is remembered.
    if (!this.countryMiniStore.$countriesShowNoResults.getValue()) {
      // Makes init call too get all countries.
      this.request.getAllCountries();
    }
  }

  /**
   * Handles activate page for pagination.
   * @param pageNumber
   */
  handleOutputActivatedPage(pageNumber: number): void {
    this.countryMiniStore.updateCountriesPaginationCurrentPage(pageNumber);
    this.utilitiesService.scrollBodyToTop();
  }

  /**
   * Handles maximum result per page.
   * @param maximumResults
   */
  handleOutputActiveMaxResults(maximumResults: number): void {
    this.countryMiniStore.updateCountriesPaginationResultsToShow(maximumResults);
    this.utilitiesService.scrollBodyToTop();
  }
}
