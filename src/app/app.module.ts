import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScyCountryListComponent } from './country-list/scy-country-list.component';
import { ScyErrorViewComponent } from './error-view/scy-error-view.component';
import {HttpClientModule} from "@angular/common/http";
import { ScySingleCountryComponent } from './single-country/scy-single-country.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginationPipe} from "./pipes/pagination.pipe";
import { PaginationComponent } from './shared/pagination/pagination.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ButtonComponent } from './shared/button/button.component';
import {ScyInputComponent} from "./shared/input/input.component";
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ScyCountryListComponent,
    ScyErrorViewComponent,
    ScySingleCountryComponent,
    CountrySearchComponent,
    ScyInputComponent,
    PaginationPipe,
    PaginationComponent,
    CountryDetailsComponent,
    ButtonComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
