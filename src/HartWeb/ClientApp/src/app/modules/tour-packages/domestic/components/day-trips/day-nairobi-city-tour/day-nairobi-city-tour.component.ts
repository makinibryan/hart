import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-day-nairobi-city-tour',
  templateUrl: './day-nairobi-city-tour.component.html',
  styleUrls: ['./day-nairobi-city-tour.component.css']
})
export class DayNairobiCityTourComponent implements OnInit {

  constructor(private router: Router ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }

}
