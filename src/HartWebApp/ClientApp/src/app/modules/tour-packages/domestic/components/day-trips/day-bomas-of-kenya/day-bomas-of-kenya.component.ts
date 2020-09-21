import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-day-bomas-of-kenya',
  templateUrl: './day-bomas-of-kenya.component.html',
  styleUrls: ['./day-bomas-of-kenya.component.css']
})
export class DayBomasOfKenyaComponent implements OnInit {

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
