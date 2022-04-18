import { Component, OnInit } from '@angular/core';
import { APIService, Timesheet } from 'src/app/API.service';
import { DatePipe } from '@angular/common';

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

  constructor(private api: APIService, private datePipe: DatePipe) { 
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.myDate = Date();
  }

  async ngOnInit() {
    // fetches timesheet data when the app loads
    this.api.ListTimesheets().then((event) => {
      this.timesheets = event.items as Timesheet[];

      // fetches the filtered timesheet data by date
      this.timesheets = this.timesheets.filter(timesheet => timesheet.day == '2022-04-15');
      console.log(this.timesheets); 
    });
    
    console.log(this.myDate);
  };
}
