import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mountain-six-days-hike-chogoria-route-down-naro-moru',
  templateUrl: './mountain-six-days-hike-chogoria-route-down-naro-moru.component.html',
  styleUrls: ['./mountain-six-days-hike-chogoria-route-down-naro-moru.component.css']
})
export class MountainSixDaysHikeChogoriaRouteDownNaroMoruComponent implements OnInit {

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
