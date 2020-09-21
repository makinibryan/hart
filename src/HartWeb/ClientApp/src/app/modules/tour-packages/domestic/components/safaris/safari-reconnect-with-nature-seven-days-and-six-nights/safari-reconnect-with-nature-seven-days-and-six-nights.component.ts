import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-reconnect-with-nature-seven-days-and-six-nights',
  templateUrl: './safari-reconnect-with-nature-seven-days-and-six-nights.component.html',
  styleUrls: ['./safari-reconnect-with-nature-seven-days-and-six-nights.component.css']
})
export class SafariReconnectWithNatureSevenDaysAndSixNightsComponent implements OnInit {

  constructor( private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit(): void {
  }

}