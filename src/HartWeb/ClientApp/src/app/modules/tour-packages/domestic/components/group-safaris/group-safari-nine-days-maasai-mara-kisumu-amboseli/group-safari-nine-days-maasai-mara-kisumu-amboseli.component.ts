import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-nine-days-maasai-mara-kisumu-amboseli',
  templateUrl: './group-safari-nine-days-maasai-mara-kisumu-amboseli.component.html',
  styleUrls: ['./group-safari-nine-days-maasai-mara-kisumu-amboseli.component.css']
})
export class GroupSafariNineDaysMaasaiMaraKisumuAmboseliComponent implements OnInit {

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
