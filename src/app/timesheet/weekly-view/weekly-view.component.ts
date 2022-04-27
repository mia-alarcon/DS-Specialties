import { Component, OnInit } from '@angular/core';
import { APIService, Timesheet } from 'src/app/API.service';
import { DatePipe } from '@angular/common';
import { TimesheetService } from 'src/app/timesheet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css'],
  providers: [DatePipe]
})
export class WeeklyViewComponent implements OnInit {

  constructor(private api: APIService, private datePipe: DatePipe, private timesheet: TimesheetService) { }

  public timesheets: Array<Timesheet> = [];
  myDate: string;

  async ngOnInit() {
    // fetches timesheet data when the app loads
    this.api.ListTimesheets().then((event) => {
      this.timesheets = event.items as Timesheet[];

      // fetches the filtered timesheet data by date
      this.timesheets = this.timesheets.filter(timesheet => timesheet.date == this.myDate);
      console.log(this.timesheets); 
    });
    
    this.myDate = this.datePipe.transform(Date(), 'yyyy-MM-dd');
    console.log(this.myDate);

    this.timesheet.selectedDate = this.myDate;

    console.log(this.timesheet.selectedDate);
  };


  public daysOfWeek: Array<any> = [
    { title: 'Sun', date: '4/24' },
    { title: 'Mon', date: '4/25' },
    { title: 'Tue', date: '4/26' },
    { title: 'Wed', date: '4/27' },
    { title: 'Thu', date: '4/28' },
    { title: 'Fri', date: '4/29' },
    { title: 'Sat', date: '4/30' }
  ];

  public employees: Array<any> = [
    { 
      name: 'Mark Otto', 
      hrSun: 0,
      hrMon: 0,
      hrTue: 0, 
      hrWed: 0,
      hrThu: 0,
      hrFri: 0, 
      hrSat: 0
    },
    { 
      name: 'Jacob Thorton', 
      hrSun: 0,
      hrMon: 0,
      hrTue: 0, 
      hrWed: 0,
      hrThu: 0,
      hrFri: 0, 
      hrSat: 0
    },
    { 
      name: 'Jennifer Brown', 
      hrSun: 0,
      hrMon: 0,
      hrTue: 0, 
      hrWed: 0,
      hrThu: 0,
      hrFri: 0, 
      hrSat: 0
    },
  ];

}






