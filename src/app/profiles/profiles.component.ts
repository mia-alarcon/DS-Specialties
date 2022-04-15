import { Component, OnInit } from '@angular/core';
import { APIService, Employee } from 'src/app/API.service';
import { SelectedEmployeeService } from '../selected-employee.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  title = 'amplify-angular-app';

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private employee: SelectedEmployeeService, private router: Router) { }

  async ngOnInit() {
    /* fetch employees when the app loads */
    this.api.ListEmployees().then((event) => {
      this.employees = event.items as Employee[];
      console.log(this.employees);
    });
    
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  clickedEmployee: any;
  isVisible: boolean = true; 

  onClick(employee){
    this.clickedEmployee = employee;
    this.employee.employeeID = employee.employeeID;
    this.employee.firstName = employee.firstName;
    this.employee.lastName = employee.lastName;
    this.employee.phoneNum = employee.phoneNum;
    this.employee.email = employee.email;
    this.employee.address = employee.address;
    this.router.navigate(['/update-employee', employee.employeeID])
  }

  onDelete(employee){
    this.clickedEmployee = employee;
    this.employee.employeeID = employee.employeeID;
    this.router.navigate(['/delete-employee', employee.employeeID])
  }
   
}
