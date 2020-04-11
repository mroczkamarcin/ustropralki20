import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-screen',
  templateUrl: './timer-screen.component.html',
  styleUrls: ['./timer-screen.component.css']
})
export class TimerScreenComponent {

  timeLeft: number = 600;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 600;
      }
    },1000)
  }

  

  pauseTimer() {
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit() {
  }

}