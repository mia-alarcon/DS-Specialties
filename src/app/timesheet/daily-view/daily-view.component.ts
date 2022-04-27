import { Component, OnInit } from '@angular/core';
import { APIService, Timesheet } from 'src/app/API.service';
import { DatePipe } from '@angular/common';
import { TimesheetService } from 'src/app/timesheet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css'],
  providers: [DatePipe]
})


export class DailyViewComponent implements OnInit {

  title = 'amplify-angular-app';

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

  public employees: Array<any> = [
    { 
      name: 'Mark Otto', 
      employeeID: '101',
      clockIn: '09:00',
      clockOut: '05:00', 
      total: 8
    },
    { 
      name: 'Erin Hansen', 
      employeeID: '103',
      clockIn: '12:00',
      clockOut: '15:30', 
      total: 3.5
    },
  ];

}
