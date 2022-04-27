import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll/payroll.component';
import { AddEmployeeComponent } from './profiles/add-employee/add-employee.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormComponent } from './form/form.component';
import { UpdateEmployeeComponent } from './profiles/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './profiles/delete-employee/delete-employee.component';
import { SubmissionComponent } from './form/submission/submission.component';
import { PayrollEmployeeComponent } from './payroll/payroll-employee/payroll-employee.component';
import { DailyViewComponent } from './timesheet/daily-view/daily-view.component';
import { WeeklyViewComponent } from './timesheet/weekly-view/weekly-view.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';

const routes: Routes = [
  { path: 'payroll', component: PayrollComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'profiles/update-employee', component: UpdateEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent },
  { path: 'update-employee/:employeeID', component: UpdateEmployeeComponent },
  { path: 'delete-employee/:employeeID', component: DeleteEmployeeComponent },
  { path: 'update-employee/:employeeID', component: UpdateEmployeeComponent },
  { path: 'profiles/update-employee', component: UpdateEmployeeComponent},
  { path: 'form/submission', component: FormComponent},
  { path: 'timesheet/daily-view', component: DailyViewComponent },
  { path: 'timesheet/weekly-view', component: WeeklyViewComponent },
  { path: 'payroll-employee', component: PayrollEmployeeComponent},
  { path: 'qr-scan', component: QrScanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }