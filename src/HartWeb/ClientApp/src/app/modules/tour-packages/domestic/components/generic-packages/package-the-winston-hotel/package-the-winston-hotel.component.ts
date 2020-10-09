import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-the-winston-hotel',
  templateUrl: './package-the-winston-hotel.component.html',
  styleUrls: ['./package-the-winston-hotel.component.css']
})
export class PackageTheWinstonHotelComponent implements OnInit {

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
