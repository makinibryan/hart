import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-the-great-mara-eleven-days-and-ten-nights',
  templateUrl: './group-safari-the-great-mara-eleven-days-and-ten-nights.component.html',
  styleUrls: ['./group-safari-the-great-mara-eleven-days-and-ten-nights.component.css']
})
export class GroupSafariTheGreatMaraElevenDaysAndTenNightsComponent implements OnInit {

  constructor( private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }

}
