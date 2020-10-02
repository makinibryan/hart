import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-serena-hotels',
  templateUrl: './serena-hotels.component.html',
  styleUrls: ['./serena-hotels.component.css']
})
export class SerenaHotelsComponent implements OnInit {

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
