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
      employeePhone: '123-456-7890',
      employeeEmail: 'mark@dns.com',
      employeeAddress: '4400 University Dr, Fairfax VA 22030' 
    },

    {
      employeeId: 102,
      employeeFname: 'Jacob', 
      employeeLname: 'Thorton',
      employeePhone: '123-456-7890',
      employeeEmail: 'jacob@dns.com',
      employeeAddress: '4400 University Dr, Fairfax VA 22030' 
    },

    {
      employeeId: 103,
      employeeFname: 'Jennifer', 
      employeeLname: 'Brown',
      employeePhone: '123-456-7890',
      employeeEmail: 'sam@dns.com',
      employeeAddress: '4400 University Dr, Fairfax VA 22030' 
    },

    {
      employeeId: 104,
      employeeFname: 'Nicole', 
      employeeLname: 'Pham',
      employeePhone: '123-456-7890',
      employeeEmail: 'nicole@dns.com',
      employeeAddress: '4400 University Dr, Fairfax VA 22030' 
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
  employeePhone: string;
  employeeEmail: string;
  employeeAddress: string;
}