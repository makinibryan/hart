import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-safari-bush-safaris',
  templateUrl: './safari-bush-safaris.component.html',
  styleUrls: ['./safari-bush-safaris.component.css']
})
export class SafariBushSafarisComponent implements OnInit {

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
