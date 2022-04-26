import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { HeaderComponent } from './header/header.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddEmployeeComponent } from './profiles/add-employee/add-employee.component';

import { DbtestComponent } from './dbtest/dbtest.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APIService } from './API.service';
import { TimesheetService } from './timesheet.service';
import { TimestampComponent } from './timestamp/timestamp.component';
import { UpdateEmployeeComponent } from './profiles/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './profiles/delete-employee/delete-employee.component';
import { LoginComponent } from './form/login/login.component';
import { FormComponent } from './form/form.component';
import { DailyViewComponent } from './timesheet/daily-view/daily-view.component';
import { WeeklyViewComponent } from './timesheet/weekly-view/weekly-view.component';
import { PayrollEmployeeComponent } from './payroll/payroll-employee/payroll-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    HeaderComponent,
    TimesheetComponent,
    ProfilesComponent,
    PayrollComponent,
    ToolbarComponent,
    AddEmployeeComponent,
    DbtestComponent,
    TimestampComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent,
    FormComponent,
    DailyViewComponent,
    WeeklyViewComponent,
    PayrollEmployeeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [APIService, TimesheetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
