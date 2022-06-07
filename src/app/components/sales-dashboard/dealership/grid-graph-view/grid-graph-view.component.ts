import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealership-grid-graph-view',
  templateUrl: './grid-graph-view.component.html',
  styleUrls: ['./grid-graph-view.component.scss']
})
export class DealershipGridGraphViewComponent implements OnInit {
  unitSummaryPanel = false;

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
  lineData: any;

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
lineChartOptions: any = {
    plugins: {
        legend: {
          
          display: false,
            labels: {
                color: '#495057',
            },
            position: 'bottom',
        },
        scales: {
          xAxes: [{
            gridLines: {
               display: false
            }
         }],
         yAxes: [{
            gridLines: {
               display: false
            }
         }]
      }
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
    this.lineData = {
      labels: ['June'],
      datasets: [
          {
              label: 'Sales',
              data: [100],
              backgroundColor: [
                  "#f20414"
              ],
              maxBarThickness: 10,
              borderRadius: 5,
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
              borderWidth: 0,
          },
          {
              label: 'Front Gross',
              data: [50],
              backgroundColor: [
                  "#32AD95"
              ],
              maxBarThickness: 10,
              borderRadius: 5,
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
              borderWidth: 0,
          },
          {
              label: 'Back Gross',
              data: [30],
              backgroundColor: [
                  "#F96A26"
              ],
              maxBarThickness: 10,
              borderRadius: 5,
              // hoverBackgroundColor: [
              //     "#FF6384",
              //     "#36A2EB",
              //     "#FFCE56",
              // ]
              borderWidth: 0,
          }
      ],
    options: {
      scales: {
        x: {
           grid: {
              display: false
           }
        },
        y: {
           grid: {
              display: false
           }
        }
   }
    }
  };
  }
}
