import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CountryModel} from "../../domain/models/country.model";
import {Location} from '@angular/common';

@Component({
  selector: 'scy-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryData!: CountryModel;

  constructor(private router: Router,
              private location: Location) {
    // Gets data from route state.
    this.countryData = router.getCurrentNavigation()?.extras.state as CountryModel;
  }

  ngOnInit(): void {
  }

  /**
   * Returns array of currencies.
   * @param currencies
   */
  returnCurrencies(currencies: any): any[] {
    return Object.keys(currencies).map((result) => {
      return currencies[result] as any;
    })
  }

  /**
   * Handles navigation back.
   */
  handleGoBack(): void {
    this.location.back();
  }
}
