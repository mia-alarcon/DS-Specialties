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
  isToday: boolean;

  async ngOnInit() {
    // fetches timesheet data when the app loads
    this.api.ListTimesheets().then((event) => {
      this.timesheets = event.items as Timesheet[];

      // fetches the filtered timesheet data by date
      this.timesheets = this.timesheets.filter(timesheet => timesheet.date == this.myDate);
      console.log(this.timesheets); 
    });

    this.timesheet.aClickedEvent.subscribe((data:string) => {
      console.log('Event message: ' + data);

      if (this.myDate == '2022-04-27') {
        this.isToday = true;
      }
    })

    this.myDate = this.datePipe.transform(Date(), 'yyyy-MM-dd');

    this.timesheet.selectedDate = this.myDate;

    
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

  public notThisWeek: Array<any> = [
    { title: 'Sun', date: '' },
    { title: 'Mon', date: '' },
    { title: 'Tue', date: '' },
    { title: 'Wed', date: '' },
    { title: 'Thu', date: '' },
    { title: 'Fri', date: '' },
    { title: 'Sat', date: '' }
  ];

  public employees: Array<any> = [
    { 
      name: 'Mark Otto', 
      hrSun: '-',
      hrMon: 4.5,
      hrTue: 8, 
      hrWed: 8,
      hrThu: 3.5,
      hrFri: '-', 
      hrSat: '-',
      total: 24
    },
    { 
      name: 'Nicole Pham', 
      hrSun: 9,
      hrMon: '-',
      hrTue: '-', 
      hrWed: '-',
      hrThu: '-',
      hrFri: 9, 
      hrSat: 9,
      total: 27
    },
    { 
      name: 'Erin Hansen', 
      hrSun: '-',
      hrMon: 8,
      hrTue: '-', 
      hrWed: 3.5,
      hrThu: '-',
      hrFri: '-', 
      hrSat: '-',
      total: 11.5
    },
  ];

}
