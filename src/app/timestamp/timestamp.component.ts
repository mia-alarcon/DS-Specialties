import { Component, OnInit } from '@angular/core';
import { APIService, Timesheet } from '../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  private subscription: Subscription | null = null;

  async ngOnInit() {
    this.subscription = <Subscription>(
      this.api.OnCreateTimesheetListener.subscribe((event: any) => {
        const newTimesheet =  event.value.data.onCreateEmployee;
        this.timesheets = [newTimesheet, ...this.timesheets];
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
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


}

