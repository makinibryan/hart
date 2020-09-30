import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-group-safari-great-lakes-six-days-and-five-nights',
  templateUrl: './group-safari-great-lakes-six-days-and-five-nights.component.html',
  styleUrls: ['./group-safari-great-lakes-six-days-and-five-nights.component.css']
})
export class GroupSafariGreatLakesSixDaysAndFiveNightsComponent implements OnInit {

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
        }
    });
}
ngOnInit(): void{

}
}