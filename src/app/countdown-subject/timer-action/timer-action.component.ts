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
  public isTimerStarted : boolean = false;
  public listPauseTimer: number[] = [];
  constructor(private timerService: CountSubjectService) { 
    this.timerService.getCurrentTimerValue().subscribe((data)=>{
      // this.listPauseTimer = [...data.currentTimerValue];
    })
  }

  ngOnInit(): void {
  }

  startTimer(): void {
    if (!this.isTimerStarted) {
      this.isTimerStarted = true;
      this.timerService.setStartTime(this.time);
    }else{
      this.timerService.setPauseTimeStamp(new Date());
    }
    // this.onStart.emit({
    //   data: this.time,
    //   isTimerStarted: this.isTimerStarted
    // });

  }
  resetTimer(): void {
    this.isTimerStarted = false;
    this.timerService.clearStartTime();
    this.timerService.clearPauseTimeStamp();
    // this.onReset.emit({
    //   isTimerStarted: this.isTimerStarted
    // });
  }
}
