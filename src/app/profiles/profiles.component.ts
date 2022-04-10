import { Component, OnInit } from '@angular/core';
import { APIService, Employee } from 'src/app/API.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  title = 'amplify-angular-app';

  public employees: Array<Employee> = [];

  constructor(private api: APIService) { }

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
}
