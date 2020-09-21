import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-safari-three-days-maasai-mara-entumoto-tented-camp',
  templateUrl: './safari-three-days-maasai-mara-entumoto-tented-camp.component.html',
  styleUrls: ['./safari-three-days-maasai-mara-entumoto-tented-camp.component.css']
})
export class SafariThreeDaysMaasaiMaraEntumotoTentedCampComponent implements OnInit {

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }

}
