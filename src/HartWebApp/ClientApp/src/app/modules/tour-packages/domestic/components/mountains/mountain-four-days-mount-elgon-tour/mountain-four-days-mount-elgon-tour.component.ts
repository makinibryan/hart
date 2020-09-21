import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mountain-four-days-mount-elgon-tour',
  templateUrl: './mountain-four-days-mount-elgon-tour.component.html',
  styleUrls: ['./mountain-four-days-mount-elgon-tour.component.css']
})
export class MountainFourDaysMountElgonTourComponent implements OnInit {

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
