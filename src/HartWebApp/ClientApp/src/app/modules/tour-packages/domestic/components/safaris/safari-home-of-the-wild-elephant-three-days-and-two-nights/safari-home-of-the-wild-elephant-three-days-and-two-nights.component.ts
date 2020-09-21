import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-home-of-the-wild-elephant-three-days-and-two-nights',
  templateUrl: './safari-home-of-the-wild-elephant-three-days-and-two-nights.component.html',
  styleUrls: ['./safari-home-of-the-wild-elephant-three-days-and-two-nights.component.css']
})
export class SafariHomeOfTheWildElephantThreeDaysAndTwoNightsComponent implements OnInit {

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
