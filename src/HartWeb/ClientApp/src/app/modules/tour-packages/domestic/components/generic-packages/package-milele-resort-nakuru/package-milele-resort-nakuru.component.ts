import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-package-milele-resort-nakuru',
  templateUrl: './package-milele-resort-nakuru.component.html',
  styleUrls: ['./package-milele-resort-nakuru.component.css']
})
export class PackageMileleResortNakuruComponent implements OnInit {

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
