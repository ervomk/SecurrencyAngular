import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {InputTypeEnum} from "../../domain/enums/input-type.enum";
import {RequestsService} from "../../domain/services/requests.service";
import {CountryStoreService} from "../../domain/services/country-store.service";

@Component({
  selector: 'scy-country-search',
  templateUrl: './svc-country-search.component.html',
  styleUrls: ['./svc-country-search.component.scss']
})
export class SvcCountrySearchComponent implements OnInit {

  searchFormGroup = new FormGroup({
    query: new FormControl(this.countryStoreService.$countrySearchQuery.getValue())
  });

  inputTypeEnum = InputTypeEnum;

  /**
   * Returns input abstract control for query.
   */
  get queryInput(): AbstractControl | null {
    return this.searchFormGroup.get('query');
  }

  constructor(
    private requestService: RequestsService,
    private countryStoreService: CountryStoreService
  ) { }

  ngOnInit(): void {
    // Listens on input change with short debounce/delay.
    this.queryInput?.valueChanges.pipe((debounceTime(1000))).subscribe((queryString: string) => {
      // Triggers the API call.
      this.countryStoreService.updateCountrySearchQuery(queryString);
      this.requestService.searchCountries(queryString);
    });
  }

}
