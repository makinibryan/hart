import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-the-winston-hotel',
  templateUrl: './the-winston-hotel.component.html',
  styleUrls: ['./the-winston-hotel.component.css']
})
export class TheWinstonHotelComponent implements OnInit {

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
