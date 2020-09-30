import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-magnificent-excursions',
  templateUrl: './group-safari-magnificent-excursions.component.html',
  styleUrls: ['./group-safari-magnificent-excursions.component.css']
})
export class GroupSafariMagnificentExcursionsComponent implements OnInit {

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
