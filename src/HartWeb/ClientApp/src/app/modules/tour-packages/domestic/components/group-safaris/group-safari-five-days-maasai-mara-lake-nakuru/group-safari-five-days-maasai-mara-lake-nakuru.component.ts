import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-five-days-maasai-mara-lake-nakuru',
  templateUrl: './group-safari-five-days-maasai-mara-lake-nakuru.component.html',
  styleUrls: ['./group-safari-five-days-maasai-mara-lake-nakuru.component.css']
})
export class GroupSafariFiveDaysMaasaiMaraLakeNakuruComponent implements OnInit {

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
