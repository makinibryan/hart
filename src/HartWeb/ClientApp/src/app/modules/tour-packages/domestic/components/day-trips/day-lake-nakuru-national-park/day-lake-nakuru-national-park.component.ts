import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-day-lake-nakuru-national-park',
  templateUrl: './day-lake-nakuru-national-park.component.html',
  styleUrls: ['./day-lake-nakuru-national-park.component.css']
})
export class DayLakeNakuruNationalParkComponent implements OnInit {

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
