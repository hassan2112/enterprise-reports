import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts-in-transit',
  templateUrl: './contracts-in-transit.component.html',
  styleUrls: ['./contracts-in-transit.component.scss']
})
export class ContractsInTransitComponent implements OnInit {
  unitSummaryPanel = false;
  checked1: boolean = true;
  checked2: boolean = false;
  checked3: boolean = true;
  checked4: boolean = false;
  checked5: boolean = true;
  checked6: boolean = false;
  checked7: boolean = true;
  checked8: boolean = false;
  checked9: boolean = false;
  checked10: boolean = false;
  checked11: boolean = false;
  checked12: boolean = false;
  checked13: boolean = true;
  checked14: boolean = false;
  checked15: boolean = true;
  checked16: boolean = false;
  checked17: boolean = true;
  checked18: boolean = false;

  varSummary: any[] = [
    {
      id: 1,
      category: 'New Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 2,
      category: 'New Non Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 3,
      category: 'New Total',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: true,
      isToggler: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 4,
      category: 'Pre-Owned Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: true,
      preOwned: [
        {
          category: 'Certified Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
        {
          category: 'Non-Certified Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
        {
          category: 'Other Makes Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
      ],
    },
    {
      id: 5,
      category: 'Pre-Owned Non Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: true,
      preOwned: [
        {
          category: 'Certified Non Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
        {
          category: 'Non-Certified Non Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
        {
          category: 'Other Makes Non Retail',
          notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
        },
      ],
    },
    {
      id: 6,
      category: 'Pre-Owned Total',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: true,
      isTotal: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 7,
      category: 'Total Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: true,
      isPurple: false,
      isTotal: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 8,
      category: 'Total Non Retail',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: true,
      isOrange: false,
      isPurple: false,
      isTotal: false,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
    {
      id: 9,
      category: 'Total',
      notFinal: 0,
      final: 3,
      mtd: 3,
      tracking: 3,
      forecast: 3,
      var: 3,
      lastYear: 3,
      lastYearVar: 3,
      grossPack: 3,
      grossnotFinal: 0,
      grossfinal: 3,
      grossmtd: 3,
      grosstracking: 3,
      grossforecast: 3,
      grossvar: 3,
      grosslastYear: 3,
      grosslastYearVar: 3,
      pvMtd: 3,
      pvForecast: 3,
      pvLastYear: 3,
      isAnchor: true,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: true,
      orders: [
        {
          category: 1,
          unit: '123',
          potential: '123',
        },
      ],
    },
  ];
  citGrid: any[] = [
    {
      id: 1,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: true,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 2,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 3,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 4,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: true,
    },
    {
      id: 5,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: true,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 6,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 7,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 8,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: true,
    },
    {
      id: 9,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: true,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 10,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 11,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: false,
    },
    {
      id: 12,
      dealManager: 'STEVE GRAMERA',
      dealDate: '06/02/2022',
      age: 12,
      dealNumber: 32179,
      buyerName: 'GEORGE DIXON',
      saleType: 'RETAIL',
      vehicleType: 'OTHER-MAKES',
      payoff: '-',
      salesManager: 'ROY MILLER',
      sentToBO: 'yes',
      recievedBO: 'No',
      sentToLender: 'Yes',
      recievedLender: 'No',
      dealFunded: 'No',
      LenderName: 'GLOBAL LENDING SERVICES LLC',
      amountFinanced: '$9,911.90',
      commentsGrid: [
        {
          comment: 'GLOBAL WILL NOT FUND UNTIL CUSTOMER TAKES DELIVERY OF THE CAR.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
        {
          comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          commentName: 'MICHAEL FUGUET',
          commentDate: '06-12-2022 07:58 PM',
        },
      ],
      isDealhead: false,
      isAnchor: false,
      isHeader: false,
      isToggler: false,
      isYellow: false,
      isOrange: false,
      isPurple: false,
      isTotal: true,
    },
  ];
  summary = [
    {
      title: 'GAP INSURANCE',
    },
    {
      title: 'INTERIOR & PAINT PROTECTION',
    },
    {
      title: 'SERVICE CONTRACT',
    },
    {
      title: 'SHADOWMARK',
    },
    {
      title: 'ULTIMATE TITANIUM',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
