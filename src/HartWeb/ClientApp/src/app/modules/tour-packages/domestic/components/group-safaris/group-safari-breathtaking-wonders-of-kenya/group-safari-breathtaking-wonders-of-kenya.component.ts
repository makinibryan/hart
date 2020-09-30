import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-breathtaking-wonders-of-kenya',
  templateUrl: './group-safari-breathtaking-wonders-of-kenya.component.html',
  styleUrls: ['./group-safari-breathtaking-wonders-of-kenya.component.css']
})
export class GroupSafariBreathtakingWondersOfKenyaComponent implements OnInit {

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

