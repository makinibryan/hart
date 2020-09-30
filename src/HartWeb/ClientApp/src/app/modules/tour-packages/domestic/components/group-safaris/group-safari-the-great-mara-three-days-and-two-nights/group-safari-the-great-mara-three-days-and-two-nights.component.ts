import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-the-great-mara-three-days-and-two-nights',
  templateUrl: './group-safari-the-great-mara-three-days-and-two-nights.component.html',
  styleUrls: ['./group-safari-the-great-mara-three-days-and-two-nights.component.css']
})
export class GroupSafariTheGreatMaraThreeDaysAndTwoNightsComponent implements OnInit {

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
