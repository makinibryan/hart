import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-beach-afro-chic-diani-beach',
  templateUrl: './beach-afro-chic-diani-beach.component.html',
  styleUrls: ['./beach-afro-chic-diani-beach.component.css']
})
export class BeachAfroChicDianiBeachComponent implements OnInit {

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
