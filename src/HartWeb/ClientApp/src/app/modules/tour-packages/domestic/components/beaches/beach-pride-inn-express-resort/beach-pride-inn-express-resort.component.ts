import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-beach-pride-inn-express-resort',
  templateUrl: './beach-pride-inn-express-resort.component.html',
  styleUrls: ['./beach-pride-inn-express-resort.component.css']
})
export class BeachPrideInnExpressResortComponent implements OnInit {

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
