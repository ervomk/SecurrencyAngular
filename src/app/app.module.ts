import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CountryInterceptor} from "./modules/country/domain/interceptors/country.interceptor";
import { SvcFavoritesViewComponent } from './modules/country/framework/favorites-view/svc-favorites-view.component';
import {CountryModule} from "./modules/country/country.module";

@NgModule({
  declarations: [
    AppComponent,
    SvcFavoritesViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountryModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CountryInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
