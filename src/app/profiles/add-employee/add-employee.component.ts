import { Component, OnInit } from '@angular/core';
import { APIService, Employee } from 'src/app/API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllOperators } from '@aws-amplify/datastore';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  title ='amplify-angular-app';
  public createForm: FormGroup;

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createForm =  this.fb.group({
      employeeID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phoneNum: ['', Validators.required]
    })
  };

  ngOnInit(): void {
  }

  public onCreate(employee: Employee) {
    this.api
      .CreateEmployee(employee)
      .then((event) => {
        console.log('employee created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating employee...', e)
      });
  }

}
