import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Employee } from 'src/app/API.service';
import { first, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { input } from 'aws-amplify';
import { SelectedEmployeeService } from 'src/app/selected-employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class UpdateEmployeeComponent implements OnInit {

  title = 'amplify-angular-app';

  //TODO: I might change the name of this
  public createForm: FormGroup;

  get employeeID(): string {
    return this.employee.employeeID;
  }

  get firstName(): string {
    return this.employee.firstName;
  }

  get lastName(): string {
    return this.employee.lastName;
  }

  get address(): string {
    return this.employee.address;
  }

  get email(): string {
    return this.employee.email;
  }

  get phoneNum(): string {
    return this.employee.phoneNum;
  }

  constructor(private api: APIService, private employee: SelectedEmployeeService, private fb: FormBuilder, private route: ActivatedRoute) { 
    this.createForm = this.fb.group({
      employeeID: [this.employeeID, Validators.required],
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      address: [this.address, Validators.required],
      email: [this.email, Validators.required],
      phoneNum: [this.phoneNum, Validators.required]
    });
  }

  ngOnInit(){ }

  public onUpdate(employee: Employee) {
    this.api
      .UpdateEmployee(employee)
      .then((event) => {
        console.log('employee updated!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error updating employee...', e)
      });
  }

}
