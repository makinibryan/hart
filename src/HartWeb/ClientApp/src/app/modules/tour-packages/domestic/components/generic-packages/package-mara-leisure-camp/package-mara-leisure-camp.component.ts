import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-mara-leisure-camp',
  templateUrl: './package-mara-leisure-camp.component.html',
  styleUrls: ['./package-mara-leisure-camp.component.css']
})
export class PackageMaraLeisureCampComponent implements OnInit {

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
