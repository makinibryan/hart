import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-eight-days-turkana-special',
  templateUrl: './safari-eight-days-turkana-special.component.html',
  styleUrls: ['./safari-eight-days-turkana-special.component.css']
})
export class SafariEightDaysTurkanaSpecialComponent implements OnInit {

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
