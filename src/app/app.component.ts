import { Time } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { Observable, observable, TimeInterval } from 'rxjs';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro';
}
