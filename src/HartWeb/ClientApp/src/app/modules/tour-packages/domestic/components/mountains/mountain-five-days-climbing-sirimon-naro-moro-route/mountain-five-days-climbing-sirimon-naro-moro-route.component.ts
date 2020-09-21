import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mountain-five-days-climbing-sirimon-naro-moro-route',
  templateUrl: './mountain-five-days-climbing-sirimon-naro-moro-route.component.html',
  styleUrls: ['./mountain-five-days-climbing-sirimon-naro-moro-route.component.css']
})
export class MountainFiveDaysClimbingSirimonNaroMoroRouteComponent implements OnInit {

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
