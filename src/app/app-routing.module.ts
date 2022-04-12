import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll/payroll.component';
import { AddEmployeeComponent } from './profiles/add-employee/add-employee.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UpdateEmployeeComponent } from './profiles/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './profiles/delete-employee/delete-employee.component';

const routes: Routes = [
  { path: 'payroll', component: PayrollComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'profiles/update-employee', component: UpdateEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }