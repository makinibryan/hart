import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-safari-home-of-the-big-nine-days-and-eight-nights',
  templateUrl: './safari-home-of-the-big-nine-days-and-eight-nights.component.html',
  styleUrls: ['./safari-home-of-the-big-nine-days-and-eight-nights.component.css']
})
export class SafariHomeOfTheBigNineDaysAndEightNightsComponent implements OnInit {

  constructor( private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit(): void {
  }

}
