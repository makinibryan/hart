import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-bush-and-lake',
  templateUrl: './safari-bush-and-lake.component.html',
  styleUrls: ['./safari-bush-and-lake.component.css']
})
export class SafariBushAndLakeComponent implements OnInit {

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
