import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedEmployeeService {
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;

  constructor() { }

  


}
