import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settingPanel = false;
  routeLink = window.location.pathname.replace(/\//,'');
  navigation: any[] = [
    {
      title: 'Sales Dashboard',
      href: 'dashboard',
    },
    {
      title: 'Favorites',
      href:'javascript:void(0);'
    },
    {
      title: 'Summaries',
      href:'javascript:void(0);',
      subNav: [
        {
          title: 'Store Summary',
          href: 'summary/store-summary',
        },
      ],
    },
    {
      title: 'Cash Analysis',
      href:'javascript:void(0);'
    },
    {
      title: 'Inventory',
      href:'javascript:void(0);'
    },
    {
      title: 'Sales & FI',
      href:'javascript:void(0);'
    },
    {
      title: 'Fixed',
      href:'javascript:void(0);',
    },
    {
      title: 'Forcast',
      href:'javascript:void(0);',
      subNav: [
        {
          title: 'Weekly Forecast',
      href:'forcast/weekly-forecast'
        }
      ],
    },
    {
      title: 'Enterprises',
      href:'javascript:void(0);'
    }
  ];

  constructor(private router: Router ) {
    
  }

  ngOnInit(): void {
    
  }

}
