import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimesheetService } from '../timesheet.service';
import { Subscription } from 'rxjs';
import { time } from 'console';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  date: string;
  testDate: string;

  constructor(private router: Router, private timesheet: TimesheetService) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  SendDataonChange(event: any){
    this.date = event.target.value;
    console.log(this.date);
  }

  setDate(){
    this.timesheet.selectedDate = this.date;
    this.testDate = this.date;
    console.log(this.testDate);
  }
}
