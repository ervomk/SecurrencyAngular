import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, takeUntil} from "rxjs/operators";
import {InputTypeEnum} from "../../../../shared/enums/input-type.enum";
import {RequestsService} from "../../domain/services/requests.service";
import {CountryStoreService} from "../../domain/services/country-store.service";
import {Subject} from "rxjs";

@Component({
  selector: 'scy-country-search',
  templateUrl: './svc-country-search.component.html',
  styleUrls: ['./svc-country-search.component.scss']
})
export class SvcCountrySearchComponent implements OnInit, OnDestroy {

  public searchFormGroup = new FormGroup({
    query: new FormControl(this.countryStoreService.countrySearchQuery$.getValue())
  });
  public readonly inputTypeEnum = InputTypeEnum;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  /**
   * Returns input abstract control for query.
   */
  public get queryInput(): AbstractControl | null {
    return this.searchFormGroup.get('query');
  }

  constructor(
    private requestService: RequestsService,
    private countryStoreService: CountryStoreService
  ) {
  }

  public ngOnInit(): void {
    // Listens on input change with short debounce/delay.
    this.queryInput?.valueChanges.pipe(takeUntil(this.$destroy), (debounceTime(1000))).subscribe((queryString: string) => {
      // Triggers the API call.
      this.countryStoreService.updateCountrySearchQuery(queryString);
      this.requestService.searchCountries(queryString);
    });
  }

  public ngOnDestroy() {
    // Emits back to kill subscriptions.
    this.$destroy.next(true);
  }
}
