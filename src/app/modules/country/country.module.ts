import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvcCountryDetailsComponent} from "./framework/country-details/svc-country-details.component";
import {ScyCountryListComponent} from "./framework/country-list/scy-country-list.component";
import {SvcCountrySearchComponent} from "./framework/country-search/svc-country-search.component";
import {ScyErrorViewComponent} from "./framework/error-view/scy-error-view.component";
import {ScySingleCountryComponent} from "./framework/single-country/scy-single-country.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScyInputComponent} from "../../shared/components/input/input.component";
import {RouterModule} from "@angular/router";
import {SvcPaginationComponent} from "../../shared/components/pagination/svc-pagination.component";
import {SvcLoaderComponent} from "../../shared/components/loader/svc-loader.component";
import {SvcButtonComponent} from "../../shared/components/button/svc-button.component";
import {CountryRoutingModule} from "./country-routing.module";
import {SvcCountryMainViewComponent} from "./framework/country-main-view/svc-country-main-view.component";
import {ScyBoxParallaxDirective} from "../../shared/directives/box-parallax/vlt-box-parallax.directive";
import {SvcPaginationPipe} from "./domain/pipes/pagination.pipe";


@NgModule({
  declarations: [
    SvcCountryDetailsComponent,
    ScyCountryListComponent,
    SvcCountrySearchComponent,
    ScyErrorViewComponent,
    ScySingleCountryComponent,
    ScyInputComponent,
    SvcPaginationPipe,
    SvcPaginationComponent,
    SvcLoaderComponent,
    SvcButtonComponent,
    SvcCountryMainViewComponent,
    ScyBoxParallaxDirective
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
