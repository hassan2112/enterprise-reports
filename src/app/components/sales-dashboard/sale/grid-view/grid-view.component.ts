import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  
  unitSummaryPanel = false;
  checked: boolean = false;
  summary = [
    {
      title: 'Retail Unit',
    },
    {
      title: 'Fleet/Non-Retail',
    },
    {
      title: 'Front',
    },
    {
      title: 'Back',
    },
    {
      title: 'Total (no Incentive)',
    },
    {
      title: 'Incentive',
    },
    {
      title: 'Front',
    },
    {
      title: 'Gross',
    },
    {
      title: 'Pack',
    },
    {
      title: 'Pack/Doc Fees',
    },
    {
      title: 'Back',
    },
    {
      title: 'Incentives',
    },
    {
      title: 'Wholesale',
    },
    {
      title: 'Gross before Adj',
    },
    {
      title: 'Chargebacks',
    },
  ];
  unitVal = [
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
    },
    {
      title: '23',
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
