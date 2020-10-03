import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-safari-bush-and-beach-family',
  templateUrl: './safari-bush-and-beach-family.component.html',
  styleUrls: ['./safari-bush-and-beach-family.component.css']
})
export class SafariBushAndBeachFamilyComponent implements OnInit {

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
