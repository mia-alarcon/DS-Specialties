import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService, Employee } from '../API.service';

@Component({
  selector: 'app-dbtest',
  templateUrl: './dbtest.component.html',
  styleUrls: ['./dbtest.component.css']
})
export class DbtestComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
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
