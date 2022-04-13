import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Employee } from 'src/app/API.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class UpdateEmployeeComponent implements OnInit {
  title = 'amplify-angular-app';

  //TODO: I might change the name of this
  public createForm: FormGroup;

  public employees: Array<Employee> = [];

  constructor(private api: APIService, private fb: FormBuilder, private route: ActivatedRoute) { 
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

  employee: any;

  ngOnInit(){
    this.route.paramMap.subscribe(parameterMap => {
      const employeeID = parameterMap.get('employeeID');
      console.log(this.getEmployee(employeeID))
      console.log(employeeID)
    });
    //you need pass id
    //this.onGetEmployee//(/*pass something here */);
  }

  private getEmployee(employeeID: string) {
      console.log(this.employee = this.api.GetEmployee(employeeID));
  }
  /*
  * 1. pass the employee id ( you can do this by giving it though the url () or if there is something with angular that you know where you can pass it to the controller)
  * 2. have two way binding with the data (with the form), right now you have it so that you have your constructor so what you would need to do is once you get that onGetEmployee you will update every field that is listed with the data that you are getting 
  * 3. preform the update as you where before
  */

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

  

  //why would you get the employee if you are pass the whole thing
  /*public onGetEmployee(employee: Employee) {
    this.api
    //just use the id to get the employee
      .GetEmployee(this.employees)
      .then((event) => {
        console.info(event)
        console.info(this.createForm)
        //this.createForm.address = 'main street' //this would be something like employee.address
        //this is where you would want to fill the form 
        console.log('employee fetched!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error fetching employee...', e)
      });
  }*/

}
