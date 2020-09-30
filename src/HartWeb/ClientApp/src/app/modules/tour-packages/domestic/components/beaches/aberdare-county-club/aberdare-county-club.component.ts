import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-aberdare-county-club',
  templateUrl: './aberdare-county-club.component.html',
  styleUrls: ['./aberdare-county-club.component.css']
})
export class AberdareCountyClubComponent implements OnInit {

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
