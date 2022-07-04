import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  // @Input() start!: number
  public timer: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() set start(value: number) {
    // alert(value);
    this.timer = value;
    if (this.timer) {
      this.startTimer();
    }
 }
 
 get start(): number {
 
     return this.timer;

 }
 startTimer(): void{
  setInterval(()=>{
    this.timer--;
  },1000)
 }
}
