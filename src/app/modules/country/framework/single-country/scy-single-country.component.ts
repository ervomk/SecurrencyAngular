import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CountryModel} from "../../domain/models/country.model";
import {CountryAddToStorageService} from "../../domain/services/country-add-to-storage.service";

@Component({
  selector: 'scy-single-country',
  templateUrl: './scy-single-country.component.html',
  styleUrls: ['./scy-single-country.component.scss']
})
export class ScySingleCountryComponent implements OnInit {

  @Input() public country!: CountryModel;
  @Output() public emitFavoritesDeleteEvent: EventEmitter<null> = new EventEmitter();

  public isCountryFavorited!: boolean;

  constructor(
    private singleCountryAddToStorage: CountryAddToStorageService
  ) {
  }

  public ngOnInit(): void {
    this.checkIfCountryIsFavorited();
  }

  public checkIfCountryIsFavorited(): void {
    this.isCountryFavorited = this.singleCountryAddToStorage.checkIfEntryIsFavorited(this.country.cca3);
  }

  public addToFavorites(event: Event): void {
    event.stopPropagation();
    if (!this.isCountryFavorited) {
      this.singleCountryAddToStorage.addToFavorites(this.country);
      this.isCountryFavorited = true;
    } else {
      this.singleCountryAddToStorage.removeFromFavorites(this.country.cca3);
      this.isCountryFavorited = false;
    }

    // Emits to it's parent component that change has ooccured.
    this.emitFavoritesDeleteEvent.next();
  }
}
