import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-day-trip-to-hells-gate-national-park',
  templateUrl: './day-trip-to-hells-gate-national-park.component.html',
  styleUrls: ['./day-trip-to-hells-gate-national-park.component.css']
})
export class DayTripToHellsGateNationalParkComponent implements OnInit {

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
