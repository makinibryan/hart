import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-day-fourteen-falls',
  templateUrl: './day-fourteen-falls.component.html',
  styleUrls: ['./day-fourteen-falls.component.css']
})
export class DayFourteenFallsComponent implements OnInit {

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
