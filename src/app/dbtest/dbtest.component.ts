import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Employee } from '../API.service';

@Component({
  selector: 'app-dbtest',
  templateUrl: './dbtest.component.html',
  styleUrls: ['./dbtest.component.css']
})
export class DbtestComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      phoneNum: ['', Validators.required]
    });
  }

  async ngOnInit() {
    /* fetch employees when the app loads */
    this.api.ListEmployees().then((event) => {
      this.employees = event.items as Employee[];
    });
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
