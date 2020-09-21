import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mountain-six-days-five-nights-trekking-safari',
  templateUrl: './mountain-six-days-five-nights-trekking-safari.component.html',
  styleUrls: ['./mountain-six-days-five-nights-trekking-safari.component.css']
})
export class MountainSixDaysFiveNightsTrekkingSafariComponent implements OnInit {

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
