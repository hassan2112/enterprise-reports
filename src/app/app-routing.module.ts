import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDashboardComponent } from './components/sales-dashboard/sales-dashboard.component';
import { WeeklyForecastComponent } from './components/weekly-forecast/weekly-forecast.component';
import { StoreSummaryComponent } from './components/store-summary/store-summary.component';

const routes: Routes = [
  {
    path: 'dashboard', component: SalesDashboardComponent
  },
  {
    path: 'forcast/weekly-forecast', component: WeeklyForecastComponent
  },
  {
    path: 'summary/store-summary', component: StoreSummaryComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
