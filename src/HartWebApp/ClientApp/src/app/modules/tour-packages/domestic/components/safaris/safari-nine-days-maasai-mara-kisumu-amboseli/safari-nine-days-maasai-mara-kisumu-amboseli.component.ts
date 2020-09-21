import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-safari-nine-days-maasai-mara-kisumu-amboseli',
  templateUrl: './safari-nine-days-maasai-mara-kisumu-amboseli.component.html',
  styleUrls: ['./safari-nine-days-maasai-mara-kisumu-amboseli.component.css']
})
export class SafariNineDaysMaasaiMaraKisumuAmboseliComponent implements OnInit {

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
