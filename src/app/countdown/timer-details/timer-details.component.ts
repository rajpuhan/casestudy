import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.scss']
})
export class TimerDetailsComponent implements OnInit {
  public pausedTimeList : Array<Date> = [];
  public pauseTimeStamp !: Date;
  public resetFlag !: boolean;
  constructor() { }
  @Input() set pausedAt(value: Date) {
    // alert(value);
    this.pauseTimeStamp = value;
    this.pausedTimeList.unshift(value);
 }
 
 get pausedAt(): Date {
 
     return this.pauseTimeStamp;

 }

 @Input() set reset(value: boolean) {
  // alert(value);
  this.resetFlag = value;
  if(value){
    this.pausedTimeList = [];
  }
}

get reset(): boolean {

   return this.resetFlag;

}

  ngOnInit(): void {
  }

}
