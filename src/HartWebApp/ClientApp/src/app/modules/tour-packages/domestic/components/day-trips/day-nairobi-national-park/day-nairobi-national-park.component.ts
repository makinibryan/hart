import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-day-nairobi-national-park',
  templateUrl: './day-nairobi-national-park.component.html',
  styleUrls: ['./day-nairobi-national-park.component.css']
})
export class DayNairobiNationalParkComponent implements OnInit {

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
