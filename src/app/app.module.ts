import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { HeaderComponent } from './header/header.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddEmployeeComponent } from './profiles/add-employee/add-employee.component';
=======
import { LeftNavbarComponent } from './component/left-navbar/left-navbar.component';
import { HeaderComponent } from './component/header/header.component';

import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { DbtestComponent } from './dbtest/dbtest.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APIService } from './API.service';
>>>>>>> mia

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    HeaderComponent,
    TimesheetComponent,
<<<<<<< HEAD
    ProfilesComponent,
    PayrollComponent,
    ToolbarComponent,
    AddEmployeeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
=======
    DbtestComponent,
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [APIService],
>>>>>>> mia
  bootstrap: [AppComponent],
})
export class AppModule {}
