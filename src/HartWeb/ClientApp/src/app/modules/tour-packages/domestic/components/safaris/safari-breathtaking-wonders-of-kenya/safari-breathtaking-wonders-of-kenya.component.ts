import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-breathtaking-wonders-of-kenya',
  templateUrl: './safari-breathtaking-wonders-of-kenya.html',
  styleUrls: ['./safari-breathtaking-wonders-of-kenya.css']
})
export class SafariBreathtakingWondersOfKenyaComponent implements OnInit {

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

