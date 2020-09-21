import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-day-karen-blixen-and-giraffe-center',
  templateUrl: './day-karen-blixen-and-giraffe-center.component.html',
  styleUrls: ['./day-karen-blixen-and-giraffe-center.component.css']
})
export class DayKarenBlixenAndGiraffeCenterComponent implements OnInit {

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
