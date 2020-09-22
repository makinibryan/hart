import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-day-haller-park-and-nguuni-wildlife-sanctuary',
  templateUrl: './day-haller-park-and-nguuni-wildlife-sanctuary.component.html',
  styleUrls: ['./day-haller-park-and-nguuni-wildlife-sanctuary.component.css']
})
export class DayHallerParkAndNguuniWildlifeSanctuaryComponent implements OnInit {

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

