import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-trending',
  templateUrl: './store-trending.component.html',
  styleUrls: ['./store-trending.component.scss']
})
export class StoreTrendingComponent implements OnInit {

  constructor() { }

  
  data: any;
  lineData: any;
lineChartOptions: any = {
    plugins: {
      
      title: {
        display: true,
        text: 'Units'
      },
        legend: {
          
          display: true,
            labels: {
                color: '#495057',
            },
            position: 'bottom',
        },
    }
};
lineChartOptionsGLTrending: any = {
    plugins: {
      
      title: {
        display: true,
        text: 'GL Trending'
      },
        legend: {
          
          display: true,
            labels: {
                color: '#495057',
            },
            position: 'bottom',
        },
    }
};
lineChartOptionsServiceHour: any = {
    plugins: {
      
      title: {
        display: true,
        text: 'Service Hours'
      },
        legend: {
          
          display: true,
            labels: {
                color: '#495057',
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
    
  this.lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
          label: 'New',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
      },
      {
          label: 'Pre Owned',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ],
  options: {
    responsive: false,
    maintainAspectRatio: false
  }
};
}
}
