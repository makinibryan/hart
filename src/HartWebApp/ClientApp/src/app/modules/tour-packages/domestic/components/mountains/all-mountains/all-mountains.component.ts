import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-all-mountains',
  templateUrl: './all-mountains.component.html',
  styleUrls: ['./all-mountains.component.css']
})
export class AllMountainsComponent implements OnInit {
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

