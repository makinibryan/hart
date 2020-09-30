import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-the-great-mara-and-amboseli',
  templateUrl: './group-safari-the-great-mara-and-amboseli.component.html',
  styleUrls: ['./group-safari-the-great-mara-and-amboseli.component.css']
})
export class GroupSafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent implements OnInit {

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
