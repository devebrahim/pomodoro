import { Time } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { Observable, observable, TimeInterval } from 'rxjs';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pomodoro-project';
  II:number=  5
  timeLeft: number = 60;
  minit: number = 2;
  interval;
  interval2;
  constructor() {}
  startTimer() {
    this.interval = setInterval(() => {
       if(this.timeLeft > 55) {
        this.timeLeft--;} 
      else{
        this.timeLeft=60;
        this.minit--;}
      },1000)  
    this.interval2 = setInterval(() => {
      if(this.timeLeft==56 && this.minit==0) {
       alert("ghe");
       clearInterval(this.interval)
       clearInterval(this.interval2)
     }
      else;},1000)}
  pauseTimer() {
    clearInterval(this.interval);
    clearInterval(this.interval2)
  }
  ngOnInit() {}
}  