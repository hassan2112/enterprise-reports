import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { DealershipComponent } from './sales-dashboard/dealership/dealership.component';
import { ServiceComponent } from './sales-dashboard/service/service.component';
import { SaleComponent } from './sales-dashboard/sale/sale.component';
import { GridViewComponent } from './sales-dashboard/sale/grid-view/grid-view.component';
import { GridGraphViewComponent } from './sales-dashboard/sale/grid-graph-view/grid-graph-view.component';
import { GraphViewComponent } from './sales-dashboard/sale/graph-view/graph-view.component';

import { DealershipGridViewComponent } from './sales-dashboard/dealership/grid-view/grid-view.component';
import { DealershipGridGraphViewComponent } from './sales-dashboard/dealership/grid-graph-view/grid-graph-view.component';
import { DealershipGraphViewComponent } from './sales-dashboard/dealership/graph-view/graph-view.component';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { ServiceGraphViewComponent } from './sales-dashboard/service/service-graph-view/service-graph-view.component';
import { ServiceGridViewComponent } from './sales-dashboard/service/service-grid-view/service-grid-view.component';
import { ServiceGridGraphViewComponent } from './sales-dashboard/service/service-grid-graph-view/service-grid-graph-view.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { StoreSummaryComponent } from './store-summary/store-summary.component';
import { StoreMonthlySummaryComponent } from './store-summary/store-monthly-summary/store-monthly-summary.component';
import { StoreTrendingComponent } from './store-summary/store-trending/store-trending.component';
import { StoreInventoryComponent } from './store-summary/store-inventory/store-inventory.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { NcmComponent } from './benchmark/ncm/ncm.component';
import { CustomComponent } from './benchmark/custom/custom.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { ContractsInTransitComponent } from './receivables/contracts-in-transit/contracts-in-transit.component';


@NgModule({
  declarations: [
    SalesDashboardComponent,
    DealershipComponent,
    ServiceComponent,
    SaleComponent,
    GridViewComponent,
    GridGraphViewComponent,
    GraphViewComponent,
    DealershipGridViewComponent,
    DealershipGridGraphViewComponent,
    DealershipGraphViewComponent,
    ServiceGraphViewComponent,
    ServiceGridViewComponent,
    ServiceGridGraphViewComponent,
    WeeklyForecastComponent,
    StoreSummaryComponent,
    StoreMonthlySummaryComponent,
    StoreTrendingComponent,
    StoreInventoryComponent,
    BenchmarkComponent,
    NcmComponent,
    CustomComponent,
    ReceivablesComponent,
    ContractsInTransitComponent,

  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    InputSwitchModule,
    DropdownModule,
    ChartModule,
    SidebarModule,
    InputTextModule
  ],
  exports: [
    SalesDashboardComponent
  ]
})
export class ComponentsModule { }
