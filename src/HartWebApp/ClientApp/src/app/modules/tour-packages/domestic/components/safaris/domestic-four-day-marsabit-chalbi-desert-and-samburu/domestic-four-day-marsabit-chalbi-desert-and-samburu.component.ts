import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector: 'app-day-marsabit-chalbi-samburu',
    templateUrl: './domestic-four-day-marsabit-chalbi-desert-and-samburu.component.html',
    styleUrls: ['./domestic-four-day-marsabit-chalbi-desert-and-samburu.component.css']
})
export class DayMarsabitChalbiSamburucComponent implements OnInit{
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