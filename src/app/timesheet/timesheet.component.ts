import { Component, OnInit } from '@angular/core';
import { APIService, Employee, Timesheet } from 'src/app/API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  public timesheets: Array<Timesheet> = [];

  public dataList: Array<IEmployee> = [
    {
      employeeId: 101,
      employeeFname: 'Mark', 
      employeeLname: 'Otto'
    },

    {
      employeeId: 102,
      employeeFname: 'Jacob', 
      employeeLname: 'Thorton'
    },

    {
      employeeId: 103,
      employeeFname: 'Jennifer', 
      employeeLname: 'Brown'
    },

    {
      employeeId: 104,
      employeeFname: 'Nicole', 
      employeeLname: 'Pham'
    }
  ]

  constructor(private api: APIService, private router: Router) { }

  private subscription: Subscription | null = null;

  async ngOnInit() {
    /* fetch employees when the app loads */
    this.api.ListTimesheets().then((event) => {
      this.timesheets = event.items as Timesheet[];
      console.log(this.timesheets);
    });
  }

}

export interface IEmployee {
  employeeId: number;
  employeeFname: string;
  employeeLname: string;
}
