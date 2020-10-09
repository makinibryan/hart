import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-serena-hotels',
  templateUrl: './package-serena-hotels.component.html',
  styleUrls: ['./package-serena-hotels.component.css']
})
export class PackageSerenaHotelsComponent implements OnInit {

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
