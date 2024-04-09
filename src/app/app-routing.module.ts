import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDateCountryComponent } from './form-date-country/form-date-country.component';
import { RandomHolidayComponent } from './random-holiday/random-holiday.component';

const routes: Routes = [
  { path: 'search-by-date-country', component: FormDateCountryComponent },
  { path: 'random-holiday', component: RandomHolidayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
