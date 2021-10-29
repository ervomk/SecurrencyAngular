import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ScyCountryListComponent} from "./framework/country-list/scy-country-list.component";
import {CountryDetailsComponent} from "./framework/country-details/country-details.component";
import {CountryMainViewComponent} from "./framework/country-main-view/country-main-view.component";

const routes: Routes = [
  {
    path: '',
    component: CountryMainViewComponent,
    children: [
      {
        path: '',
        component: ScyCountryListComponent
      },
      {
        path: 'country-details',
        component: CountryDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule { }
