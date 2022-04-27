import { animate } from '@angular/animations';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TimesheetService {
  
  @Output() aClickedEvent = new EventEmitter<string>();
  
  AClicked(msg: string) {
    this.aClickedEvent.emit(msg);
  }
  
  selectedDate: string;

  constructor() { }
}
