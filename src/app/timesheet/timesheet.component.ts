import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  public dataList: Array<IEmployee> = [
    {
      employeeId: 101,
      employeeFname: 'Mark', 
      employeeLname: 'Otto',
      clockIn: '8:00 AM',
      clockOut: '5:00 PM',
      total: '9 hrs'
    },

    {
      employeeId: 102,
      employeeFname: 'Jacob', 
      employeeLname: 'Thorton',
      clockIn: '9:00 AM',
      clockOut: '5:00 PM',
      total: '8 hrs'
    },

    {
      employeeId: 103,
      employeeFname: 'Jennifer', 
      employeeLname: 'Brown',
      clockIn: '7:00 AM',
      clockOut: '4:00 PM',
      total: '9hrs'
    },

    {
      employeeId: 104,
      employeeFname: 'Nicole', 
      employeeLname: 'Pham',
      clockIn: '2:00 PM',
      clockOut: '5:00 PM',
      total: '3hrs'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface IEmployee {
  employeeId: number;
  employeeFname: string;
  employeeLname: string;
  clockIn: string;
  clockOut: string;
  total: string;
}