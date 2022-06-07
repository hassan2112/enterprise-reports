import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-grid-view',
  templateUrl: './service-grid-view.component.html',
  styleUrls: ['./service-grid-view.component.scss']
})
export class ServiceGridViewComponent implements OnInit {

  unitSummaryPanel = false;
  checked: boolean = false;
  summary = [
    {
      title: 'New Retail',
    },
    {
      title: 'Fleet/Non-Retail',
    },
    {
      title: 'Pre-owned Retail',
    },
    {
      title: 'Wholesale',
    },
    {
      title: 'New Retail',
    },
    {
      title: 'Incentive',
    },
    {
      title: 'Pre-owned Retail',
    },
    {
      title: 'Wholesale/Fleet',
    },
    {
      title: 'Chargebacks',
    },
    {
      title: 'New Deals',
    },
    {
      title: 'New Deals aged',
    },
    {
      title: 'Used Deals',
    },
    {
      title: 'Used Deals Aged',
    },
  ];
  fixedSummary = [
    {
      title: "CP RO's",
    },
    {
      title: "Warranty RO's",
    },
    {
      title: "Internal RO's",
    },
    {
      title: "Other RO's",
    },
    {
      title: 'Service',
    },
    {
      title: 'Parts',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: "CP RO's",
    },
    {
      title: "Warranty RO's",
    },
    {
      title: "Internal RO's",
    },
    {
      title: "Other RO's",
    },
  ];
  storeSummary = [
    {
      title: 'Fixed Gross',
    },
    {
      title: 'F&I PVR',
    },
    {
      title: 'Pre-Owned Gross',
    },
    {
      title: '',
    },
    {
      title: 'Variable Gross',
    },
    {
      title: 'Wholesale/Fleet',
    },
    {
      title: 'Chargebacks',
    },
    {
      title: 'Fixed Gross',
    },
    {
      title: '',
    },
    {
      title: 'Pre-Fixed Expenses',
    },
    {
      title: 'Pre-Fixed Net',
    },
    {
      title: 'Pre-Fixed % of GP',
    },
    {
      title: 'Fixed Expenses',
    },
  ];
  
  reportListing = [
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
    {
      date: '05/25/2022',
      buyer: 'BOBBY TASKEY',
      stock: 'L001259',
      deal: '31967',
      vin: '5J6RW1H83NL001259',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$1,176.00',
      totalFBGross: '$1,176.00',
    },
    {
      date: '05/25/2022',
      buyer: 'LARRY THOMPSON',
      stock: 'E021215',
      deal: '31966',
      vin: '7FARW2H55NE021215',
      vehicleSold: '2022 HONDA CR-V',
      totalFIGross: '$978.13',
      totalFBGross: '$978.13',
    },
  ];
  constructor() { }
  data: any;

  chartOptions: any = {
    plugins: {
        legend: {
            labels: {
                color: '#495057',
                padding: 20,
                boxWidth: 14,
                boxHeight: 14,
            },
            position: 'bottom',
        },
    }
};
  config: any = {
    theme: 'lara-light-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
};
  ngOnInit(): void {
    this.data = {
      labels: ['Sales','Front Gross','Back Gross'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#f20414",
                  "#32AD95",
                  "#F96A26",
              ],
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
              borderWidth: 4,
          },
          {
              data: [300, 50, 100],
              backgroundColor: [
                "#f20414",
                "#32AD95",
                "#F96A26",
              ],
              borderWidth: 4
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
          },
          {
              data: [300, 50, 100],
              backgroundColor: [
                "#f20414",
                "#32AD95",
                "#F96A26",
              ],
              borderWidth: 4
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
          }
      ]
  };
  }
}
