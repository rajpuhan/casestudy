import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  startTimer(): void {
    if (!this.isTimerStarted) {
      this.isTimerStarted = true;
    }
    this.onStart.emit({
      data: this.time,
      isTimerStarted: this.isTimerStarted
    });
  }
  resetTimer(): void {
    this.isTimerStarted = false;
    this.onReset.emit({
      isTimerStarted: this.isTimerStarted
    });
  }
}
