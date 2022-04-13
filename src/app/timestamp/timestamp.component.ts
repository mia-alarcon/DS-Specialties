import { Component, OnInit } from '@angular/core';
import { APIService, Timesheet } from '../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Auth } from 'aws-amplify';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  public timesheets: Array<Timesheet> = [];

  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      employeeID: ['', Validators.required],
      firstName: ['', Validators.required],
      clockIn: ['', Validators.required],
      clockOut: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public onCreate(timesheet: Timesheet) {
    this.api
      .CreateTimesheet(timesheet)
      .then((event) => {
        console.log('timestamp created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating timestamp...', e)
      });
  }

  public onUpdate(timesheet: Timesheet) {
    this.api
      .UpdateTimesheet(timesheet)
      .then((event) => {
        console.log('timestamp updated!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error updating timestamp...', e)
      });
  }


}

