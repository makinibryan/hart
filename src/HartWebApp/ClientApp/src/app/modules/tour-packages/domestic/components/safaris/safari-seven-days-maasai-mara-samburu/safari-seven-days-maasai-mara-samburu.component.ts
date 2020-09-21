import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-seven-days-maasai-mara-samburu',
  templateUrl: './safari-seven-days-maasai-mara-samburu.component.html',
  styleUrls: ['./safari-seven-days-maasai-mara-samburu.component.css']
})
export class SafariSevenDaysMaasaiMaraSamburuComponent implements OnInit {

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
