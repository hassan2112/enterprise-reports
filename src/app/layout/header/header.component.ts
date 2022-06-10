import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settingPanel = false;

  navigation: any[] = [
    {
      title: 'Sales Dashboard',
      href: 'dashboard',
    },
    {
      title: 'weekly-forecast',
      href:'weekly-forecast'
    },
    {
      title: 'Store Summary',
      href:'store-summary'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
