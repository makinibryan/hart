import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mountain-four-days-climbing-sirimon-route',
  templateUrl: './mountain-four-days-climbing-sirimon-route.component.html',
  styleUrls: ['./mountain-four-days-climbing-sirimon-route.component.css']
})
export class MountainFourDaysClimbingSirimonRouteComponent implements OnInit {

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
