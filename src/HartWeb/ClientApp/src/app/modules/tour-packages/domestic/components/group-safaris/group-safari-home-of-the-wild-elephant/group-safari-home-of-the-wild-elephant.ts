import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-home-of-the-wild-elephant',
  templateUrl: './group-safari-home-of-the-wild-elephant.component.html',
  styleUrls: ['./group-safari-home-of-the-wild-elephant.component.css']
})
export class GroupSafariHomeOfTheWildElephantComponent implements OnInit {

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
