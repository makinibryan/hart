import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-beach-english-point-marina',
  templateUrl: './beach-english-point-marina.component.html',
  styleUrls: ['./beach-english-point-marina.component.css']
})
export class BeachEnglishPointMarinaComponent implements OnInit {

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
