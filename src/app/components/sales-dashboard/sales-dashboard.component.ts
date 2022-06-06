import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleComponent } from './sale/sale.component';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss']
})
export class SalesDashboardComponent implements OnInit {

  @ViewChild('sale') saleComp!: SaleComponent;
  constructor() { }

  ngOnInit(): void {
  }

  viewChanged(viewIndex: number) {
    if(this.saleComp) this.saleComp.selectedView = viewIndex;
  }

  isActiveView(viewIndex: number) {
    if(!this.saleComp && !viewIndex) return true
    
    if(this.saleComp )  
    return this.saleComp.selectedView === viewIndex;
    return false;
  }

}
