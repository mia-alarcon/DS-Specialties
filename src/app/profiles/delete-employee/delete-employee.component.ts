import { Component, OnInit } from '@angular/core';
import { APIService, Employee } from 'src/app/API.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private fb: FormBuilder, private router: Router) { 
    this.createForm =  this.fb.group({
      employeeID: ['', Validators.required],
    });
  }

  async ngOnInit() {
    /* fetch employees when the app loads */
    this.api.ListEmployees().then((event) => {
      this.employees = event.items as Employee[];
      console.log(this.employees);
    });
  }

  public onDelete(employee: Employee) {
    this.api
      .DeleteEmployee(employee)
      .then((event) => {
        console.log('employee created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating employee...', e)
      });
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
