import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './component/left-navbar/left-navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './form/login/login.component';
import { SubmissionComponent } from './form/submission/submission.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    HeaderComponent,
    TimesheetComponent,
    FormComponent,
    LoginComponent,
    SubmissionComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
