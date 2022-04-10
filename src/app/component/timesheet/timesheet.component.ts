import { Component, OnInit } from '@angular/core';
import { APIService, Employee } from 'src/app/API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
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

  async ngOnInit() {
    /* fetch employees when the app loads */
    this.api.ListEmployees().then((event) => {
      this.employees = event.items as Employee[];
      console.log(this.employees);
    });

    this.subscription = <Subscription>(
      this.api.OnCreateEmployeeListener.subscribe((event: any) => {
        const newEmployee =  event.value.data.onCreateEmployee;
        this.employees = [newEmployee, ...this.employees];
      })
    );
  }

}
