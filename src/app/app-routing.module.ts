import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScyErrorViewComponent} from "./error-view/scy-error-view.component";
import {ScyCountryListComponent} from "./country-list/scy-country-list.component";
import {CountryDetailsComponent} from "./country-details/country-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    component: ScyCountryListComponent
  },
  {
    path: 'country-details',
    component: CountryDetailsComponent
  },
  {
    path: '**',
    component: ScyErrorViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
