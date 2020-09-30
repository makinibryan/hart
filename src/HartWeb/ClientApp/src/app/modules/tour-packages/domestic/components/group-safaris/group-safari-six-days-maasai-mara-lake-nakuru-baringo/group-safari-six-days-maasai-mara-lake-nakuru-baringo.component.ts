import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-group-safari-six-days-maasai-mara-lake-nakuru-baringo',
  templateUrl: './group-safari-six-days-maasai-mara-lake-nakuru-baringo.component.html',
  styleUrls: ['./group-safari-six-days-maasai-mara-lake-nakuru-baringo.component.css']
})
export class GroupSafariSixDaysMaasaiMaraLakeNakuruBaringoComponent implements OnInit {

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
