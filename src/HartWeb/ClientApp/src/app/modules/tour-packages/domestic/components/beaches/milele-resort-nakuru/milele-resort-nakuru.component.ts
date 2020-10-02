import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-milele-resort-nakuru',
  templateUrl: './milele-resort-nakuru.component.html',
  styleUrls: ['./milele-resort-nakuru.component.css']
})
export class MileleResortNakuruComponent implements OnInit {

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
