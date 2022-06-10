import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styleUrls: ['./store-inventory.component.scss']
})
export class StoreInventoryComponent implements OnInit {

  constructor() { }

  data: any;
  lineData: any;

  chartOptionsNew: any = {
    plugins: {
      title: {
        display: true,
        text: 'New Inventory Aging'
      },
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
  chartOptions: any = {
    plugins: {
      title: {
        display: true,
        text: 'Pre-Owned Inventory Aging'
      },
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
