import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-beach-leopard-beach-resort',
  templateUrl: './beach-leopard-beach-resort.component.html',
  styleUrls: ['./beach-leopard-beach-resort.component.css']
})
export class BeachLeopardBeachResortComponent implements OnInit {

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
