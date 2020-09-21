import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-five-days-maasai-mara-lake-nakuru',
  templateUrl: './safari-five-days-maasai-mara-lake-nakuru.component.html',
  styleUrls: ['./safari-five-days-maasai-mara-lake-nakuru.component.css']
})
export class SafariFiveDaysMaasaiMaraLakeNakuruComponent implements OnInit {

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
