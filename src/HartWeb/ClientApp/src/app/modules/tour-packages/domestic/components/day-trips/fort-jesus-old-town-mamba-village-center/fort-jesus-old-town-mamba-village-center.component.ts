import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-fort-jesus-old-town-mamba-village-center',
  templateUrl: './fort-jesus-old-town-mamba-village-center.component.html',
  styleUrls: ['./fort-jesus-old-town-mamba-village-center.component.css']
})
export class FortJesusOldTownMambaVillageCenterComponent implements OnInit {

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
