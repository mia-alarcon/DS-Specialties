import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './component/left-navbar/left-navbar.component';
import { HeaderComponent } from './component/header/header.component';

import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { DbtestComponent } from './dbtest/dbtest.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APIService } from './API.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    HeaderComponent,
    TimesheetComponent,
    DbtestComponent,
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
