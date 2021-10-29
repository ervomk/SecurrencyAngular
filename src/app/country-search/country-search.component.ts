import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {InputTypeEnum} from "../enums/input-type.enum";
import {RequestsService} from "../services/requests.service";
import {CountryStoreService} from "../services/country-store.service";

@Component({
  selector: 'scy-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {

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
