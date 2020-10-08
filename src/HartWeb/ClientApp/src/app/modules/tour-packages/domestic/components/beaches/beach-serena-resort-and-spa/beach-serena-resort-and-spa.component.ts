import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-beach-serena-resort-and-spa',
  templateUrl: './beach-serena-resort-and-spa.component.html',
  styleUrls: ['./beach-serena-resort-and-spa.component.css']
})
export class BeachSerenaResortAndSpaComponent implements OnInit {

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