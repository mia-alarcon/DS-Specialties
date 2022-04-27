import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimesheetService } from '../timesheet.service';
import { PayrollService } from '../payroll.service';
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
  employeeID: string

  constructor(private router: Router, private timesheet: TimesheetService, private payroll: PayrollService) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  SendDataonChange(event: any){
    this.date = event.target.value;
  }

  setDate(){
    this.timesheet.selectedDate = this.date;
    this.testDate = this.date;
    console.log(this.testDate);
    this.timesheet.AClicked('Component A is clicked!');
    
  }

  setEmployeeID(){
    this.payroll.EmployeeID = this.employeeID;
  }
}
