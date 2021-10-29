import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScyErrorViewComponent} from "./modules/country/framework/error-view/scy-error-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadChildren: () => import('./modules/country/country.module').then(m => m.CountryModule)
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
