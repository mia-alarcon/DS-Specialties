import { Component, OnInit } from '@angular/core';

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
