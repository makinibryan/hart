import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-getaway-two-nights-mombasa-north-coast',
  templateUrl: './getaway-two-nights-mombasa-north-coast.component.html',
  styleUrls: ['./getaway-two-nights-mombasa-north-coast.component.css']
})
export class GetawayTwoNightsMombasaNorthCoastComponent implements OnInit {

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