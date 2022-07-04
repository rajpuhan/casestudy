import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-main',
  templateUrl: './countdown-main.component.html',
  styleUrls: ['./countdown-main.component.scss']
})
export class CountdownMainComponent implements OnInit {
  startTime: number=0;
  pauseTimeStamp!: Date;
  clearTime: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  updateTime(event: any): void {
    if(this.startTime !== event.data && event.isTimerStarted){
      this.resetTime();
    }
    else{
      this.startTime = event.data
    if(event.isTimerStarted){
      this.pauseTimeStamp = new Date();
    }
    console.log(this.startTime);
    }
    
  }
  resetTime(): void {
    this.clearTime =  true;
  }
}
