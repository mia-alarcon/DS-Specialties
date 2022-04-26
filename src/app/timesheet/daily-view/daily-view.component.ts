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

  public timesheets: Array<Timesheet> = [];

  myDate: string;

  constructor(private api: APIService, private datePipe: DatePipe, private timesheet: TimesheetService) { }

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

}
