import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountSubjectService } from '../services/count-subject.service';

@Component({
  selector: 'app-timer-action',
  templateUrl: './timer-action.component.html',
  styleUrls: ['./timer-action.component.scss']
})
export class TimerActionComponent implements OnInit {

  @Output() onStart = new EventEmitter();
  @Output() onReset = new EventEmitter();
  public time!: number;
  public startTime !: number;
  public isTimerStarted : boolean = false;
  public listPauseTimer: number[] = [];
  public intervalTimer!: any;
  public pauseCount: number = 0;
  public resetCount: number = 0;
  constructor(private timerService: CountSubjectService) { 
  }

  ngOnInit(): void {
  }

  startTimer(): void {
    if (!this.isTimerStarted) {
      this.isTimerStarted = true;
      
      this.intervalTimer = setInterval(()=>{
        this.startTime--;
        this.timerService.setCurrentTimerValue(this.startTime);
      },1000)
    }else{
      this.isTimerStarted = false;
      clearInterval(this.intervalTimer);
      this.listPauseTimer.push(this.startTime);
      this.timerService.setPauseTimeStamp(new Date());
      this.pauseCount++;
      this.timerService.setPauseCount(this.pauseCount);

    }
  }
  resetTimer(): void {
    this.isTimerStarted = false;
    this.timerService.clearPauseTimeStamp();
    this.resetCount++;
  }

  updateStartTime(value: number){
    this.startTime =  value;
    this.time = value;
  }
}
