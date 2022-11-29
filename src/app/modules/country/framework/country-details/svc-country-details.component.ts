import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CountryModel} from "../../domain/models/country.model";
import {Location} from '@angular/common';
import {UtilitiesService} from "../../../../shared/services/utilities.service";

@Component({
  selector: 'scy-country-details',
  templateUrl: './svc-country-details.component.html',
  styleUrls: ['./svc-country-details.component.scss']
})
export class SvcCountryDetailsComponent {

  public countryData!: CountryModel;

  constructor(private router: Router,
              private location: Location,
              private utilitiyService: UtilitiesService) {
    // Gets data from route state.
    this.countryData = router.getCurrentNavigation()?.extras.state as CountryModel;
  }

  /**
   * Returns array of currencies.
   * @param data
   */
  public returnObjectAsArray(data: any): any[] {
    return this.utilitiyService.returnObjectAsArray(data);
  }

  /**
   * Handles navigation back.
   */
  public handleGoBack(): void {
    this.location.back();
  }
}
