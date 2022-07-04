import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountSubjectService } from '../services/count-subject.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  // @Input() start!: number
  public timer: number = 0;
  public subscription!: Subscription;
  constructor(private timerService: CountSubjectService) { 
    this.timerService.getStartTime().subscribe((data)=>{
      this.timer = data.time;
      this.startTimer();
    })
  }

  ngOnInit(): void {
  }
  
//   @Input() set start(value: number) {
//     // alert(value);
//     this.timer = value;
//     if (this.timer) {
//       this.startTimer();
//     }
//  }
 
//  get start(): number {
 
//      return this.timer;

//  }
 startTimer(): void{
  setInterval(()=>{
    this.timer--;
    this.timerService.setCurrentTimerValue(this.timer);
  },1000)
 }
//  ngOnDestroy() {
//   this.subscription.unsubscribe();
// }
}
