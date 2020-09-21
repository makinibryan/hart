import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mountain-six-days-climbing-chogoria-easy-pace-route',
  templateUrl: './mountain-six-days-climbing-chogoria-easy-pace-route.component.html',
  styleUrls: ['./mountain-six-days-climbing-chogoria-easy-pace-route.component.css']
})
export class MountainSixDaysClimbingChogoriaEasyPaceRouteComponent implements OnInit {

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
