import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-four-days-maasai-mara-nakuru',
  templateUrl: './group-safari-four-days-maasai-mara-nakuru.component.html',
  styleUrls: ['./group-safari-four-days-maasai-mara-nakuru.component.css']
})
export class GroupSafariFourDaysMaasaiMaraNakuruComponent implements OnInit {

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
