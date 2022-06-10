import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent implements OnInit {

  weeklyForecast = [
    {
      title: 'New Units',
      mtd: '2',
      projected: '10',
      isHeader: true,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Delivered',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Finalized',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Gront Gross',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'PVR',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Incentives',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'PVR w/Incentives',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Total',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: true,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Used Units',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Delivered',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Finalized',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Gront Gross',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'PVR',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'F&I Units',
      mtd: '2',
      projected: '10',
      isHeader: true,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Delivered',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Finalized',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'F&I Chargeback',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Net F&I Gross',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'F&I PVR',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Non-Retail Units',
      mtd: '2',
      projected: '10',
      isHeader: true,
      isTotal: false,
      variance: '15',
    },
    {
      title: 'Non-Retail Profit (Loss)',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    },
    {
      title: 'Non-Retail PVR',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTrSep: true,
      variance: '15',
    },
    {
      title: 'Service Gross',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: false,
      isPurple: true,
      isTrSep: true,
      variance: '15',
    },
    {
      title: 'Parts Gross',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: false,
      isOrange: true,
      isPurple: false,
      isTrSep: true,
      variance: '15',
    },
    {
      title: 'Other Income',
      mtd: '2',
      projected: '10',
      isHeader: false,
      isTotal: false,
      isYellow: true,
      isOrange: false,
      isPurple: false,
      isTrSep: false,
      variance: '15',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
