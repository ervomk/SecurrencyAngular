import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ScyCountryListComponent} from "./framework/country-list/scy-country-list.component";
import {SvcCountryDetailsComponent} from "./framework/country-details/svc-country-details.component";
import {SvcCountryMainViewComponent} from "./framework/country-main-view/svc-country-main-view.component";
import {SvcFavoritesViewComponent} from "./framework/favorites-view/svc-favorites-view.component";

const routes: Routes = [
  {
    path: '',
    component: SvcCountryMainViewComponent,
    children: [
      {
        path: '',
        component: ScyCountryListComponent
      },
      {
        path: 'country-details',
        component: SvcCountryDetailsComponent
      },
      {
        path: 'favorites',
        component: SvcFavoritesViewComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule { }
