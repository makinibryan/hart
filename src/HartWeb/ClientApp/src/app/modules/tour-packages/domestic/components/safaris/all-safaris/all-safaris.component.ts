import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-all-safaris',
  templateUrl: './all-safaris.component.html',
  styleUrls: ['./all-safaris.component.css']
})
export class AllSafarisComponent implements OnInit {

  //showGroupContent: boolean = false;

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    // if (this.router.url.includes('safaris/group')) {
    //   this.showGroupContent = true;
    // }
  }

}
