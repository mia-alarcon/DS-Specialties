import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  public dataList: Array<IEmployee> = [
    {
      employeeId: 101,
      employeeFname: 'Mark', 
      employeeLname: 'Otto',
      monday: '9',
      tuesday: '5',
      wednesday: '',
      thursday: '',
      friday: '8',
      saturday: '7',
      sunday: '4'
    },

    {
      employeeId: 102,
      employeeFname: 'Jacob', 
      employeeLname: 'Thorton',
      monday: '5',
      tuesday: '',
      wednesday: '8',
      thursday: '4',
      friday: '4',
      saturday: '',
      sunday: ''
    },

    {
      employeeId: 103,
      employeeFname: 'Jennifer', 
      employeeLname: 'Brown',
      monday: '9',
      tuesday: '5',
      wednesday: '',
      thursday: '7',
      friday: '8',
      saturday: '7',
      sunday: '4'
    },

    {
      employeeId: 104,
      employeeFname: 'Nicole', 
      employeeLname: 'Pham',
      monday: '8',
      tuesday: '',
      wednesday: '5',
      thursday: '',
      friday: '',
      saturday: '5',
      sunday: ''
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
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}