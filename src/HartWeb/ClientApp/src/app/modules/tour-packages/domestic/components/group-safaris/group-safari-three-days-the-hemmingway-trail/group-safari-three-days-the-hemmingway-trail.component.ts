import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-group-safari-three-days-the-hemmingway-trail',
  templateUrl: './group-safari-three-days-the-hemmingway-trail.component.html',
  styleUrls: ['./group-safari-three-days-the-hemmingway-trail.component.css']
})
export class GroupSafariThreeDaysTheHemmingwayTrailComponent implements OnInit {

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }
}
