import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  title = 'D&S Specialties';
  tagline = 'Sparkling Clean Everytime!';
  welcome = 'Welcome, James Cole!';
  
  constructor() {}

  ngOnInit(): void {}

}

Auth.currentAuthenticatedUser({
  bypassCache: false
}).then(user => console.log(user))
.catch(err => console.log(err));