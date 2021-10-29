import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryDetailsComponent} from "./framework/country-details/country-details.component";
import {ScyCountryListComponent} from "./framework/country-list/scy-country-list.component";
import {CountrySearchComponent} from "./framework/country-search/country-search.component";
import {ScyErrorViewComponent} from "./framework/error-view/scy-error-view.component";
import {ScySingleCountryComponent} from "./framework/single-country/scy-single-country.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScyInputComponent} from "../../shared/input/input.component";
import {RouterModule} from "@angular/router";
import {PaginationPipe} from "./domain/pipes/pagination.pipe";
import {PaginationComponent} from "../../shared/pagination/pagination.component";
import {LoaderComponent} from "../../shared/loader/loader.component";
import {ButtonComponent} from "../../shared/button/button.component";
import {CountryRoutingModule} from "./country-routing.module";
import {CountryMainViewComponent} from "./framework/country-main-view/country-main-view.component";


@NgModule({
  declarations: [
    CountryDetailsComponent,
    ScyCountryListComponent,
    CountrySearchComponent,
    ScyErrorViewComponent,
    ScySingleCountryComponent,
    ScyInputComponent,
    PaginationPipe,
    PaginationComponent,
    LoaderComponent,
    ButtonComponent,
    CountryMainViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CountryRoutingModule,
  ],
})
export class CountryModule { }
