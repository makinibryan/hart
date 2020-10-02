import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mara-leisure-camp',
  templateUrl: './mara-leisure-camp.component.html',
  styleUrls: ['./mara-leisure-camp.component.css']
})
export class MaraLeisureCampComponent implements OnInit {

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
