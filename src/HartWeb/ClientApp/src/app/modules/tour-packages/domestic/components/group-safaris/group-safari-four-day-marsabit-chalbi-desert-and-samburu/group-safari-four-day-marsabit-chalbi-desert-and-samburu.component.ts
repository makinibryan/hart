import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector: 'app-group-safari-four-day-marsabit-chalbi-samburu',
    templateUrl: './group-safari-four-day-marsabit-chalbi-desert-and-samburu.component.html',
    styleUrls: ['./group-safari-four-day-marsabit-chalbi-desert-and-samburu.component.css']
})
export class GroupSafariFourDayMarsabitChalbiDesertAndSamburu implements OnInit{
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