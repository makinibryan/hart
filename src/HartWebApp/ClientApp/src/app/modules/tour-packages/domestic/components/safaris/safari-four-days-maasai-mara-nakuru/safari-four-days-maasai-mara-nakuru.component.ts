import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-four-days-maasai-mara-nakuru',
  templateUrl: './safari-four-days-maasai-mara-nakuru.component.html',
  styleUrls: ['./safari-four-days-maasai-mara-nakuru.component.css']
})
export class SafariFourDaysMaasaiMaraNakuruComponent implements OnInit {

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
