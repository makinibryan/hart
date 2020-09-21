import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-beach-six-days-bliss-kenya-beach-and-wildlife-tour',
  templateUrl: './beach-six-days-bliss-kenya-beach-and-wildlife-tour.component.html',
  styleUrls: ['./beach-six-days-bliss-kenya-beach-and-wildlife-tour.component.css']
})
export class BeachSixDaysBlissKenyaBeachAndWildlifeTourComponent implements OnInit {

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
