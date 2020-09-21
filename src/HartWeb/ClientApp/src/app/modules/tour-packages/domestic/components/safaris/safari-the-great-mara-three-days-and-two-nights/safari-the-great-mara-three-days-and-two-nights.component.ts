import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-the-great-mara-three-days-and-two-nights',
  templateUrl: './safari-the-great-mara-three-days-and-two-nights.component.html',
  styleUrls: ['./safari-the-great-mara-three-days-and-two-nights.component.css']
})
export class SafariTheGreatMaraThreeDaysAndTwoNightsComponent implements OnInit {

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
