import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Employee } from 'src/app/API.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      employeeID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phoneNum: ['', Validators.required]
    });
  }

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = <Subscription>(
      this.api.OnCreateEmployeeListener.subscribe((event: any) => {
        const newEmployee =  event.value.data.onCreateEmployee;
        this.employees = [newEmployee, ...this.employees];
      })
    );
  }


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
