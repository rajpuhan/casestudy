import { Component, Input, OnInit } from '@angular/core';
import { CountSubjectService } from '../services/count-subject.service';

@Component({
  selector: 'app-timer-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.scss']
})
export class TimerDetailsComponent implements OnInit {
  public pausedTimeList : Array<Date> = [];
  public pauseTimeStamp !: Date;
  public resetFlag !: boolean;
  constructor(private timerService: CountSubjectService) {
    this.timerService.getPauseTimeStamp().subscribe((data)=>{
      this.pausedTimeList = [...data.listTimeStamp];
    })
   }

 @Input() set reset(value: boolean) {
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
