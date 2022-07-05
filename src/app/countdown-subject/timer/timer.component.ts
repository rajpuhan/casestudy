import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountSubjectService } from '../services/count-subject.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public timer: number = 0;
  constructor(private timerService: CountSubjectService) { 
    this.timerService.getCurrentTimerValue().subscribe((data)=>{
      this.timer = data.currentTimerValue;
    });
  }

  ngOnInit(): void {
  }
 startTimer(): void{
 }
}
