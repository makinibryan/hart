import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-aberdare-county-club',
  templateUrl: './package-aberdare-county-club.component.html',
  styleUrls: ['./package-aberdare-county-club.component.css']
})
export class PackageAberdareCountyClubComponent implements OnInit {

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
