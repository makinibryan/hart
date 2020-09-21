import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-beach-neptune-beach-resort',
  templateUrl: './beach-neptune-beach-resort.component.html',
  styleUrls: ['./beach-neptune-beach-resort.component.css']
})
export class BeachNeptuneBeachResortComponent implements OnInit {

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
