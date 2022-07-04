import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountSubjectService {

  constructor() { }
  private startTime = new Subject<any>();
  private pauseTimeStampSubject = new Subject<any>();
  private listPauseTimeStamp : Date[] = [];
  private currentTimerSubject= new Subject<any>();
  private listCurrentTimer: number[] = [];
    setStartTime(time: number) {
        this.startTime.next({ time: time });
    }

    clearStartTime() {
        this.startTime.next();
    }

    getStartTime(): Observable<any> {
        return this.startTime.asObservable();
    }

    setPauseTimeStamp(timeStamp: Date) {
      this.listPauseTimeStamp.unshift(timeStamp)
      this.pauseTimeStampSubject.next({ listTimeStamp: this.listPauseTimeStamp });
    }

    clearPauseTimeStamp() {
      this.listPauseTimeStamp.length = 0;
      this.pauseTimeStampSubject.next({ listTimeStamp: this.listPauseTimeStamp });
    }

    getPauseTimeStamp(): Observable<any> {
        return this.pauseTimeStampSubject.asObservable();
    }

    setCurrentTimerValue(timer: number) {
      this.listCurrentTimer.push(timer)
      this.currentTimerSubject.next({ currentTimerValue: this.listCurrentTimer });
    }

    clearCurrentTimerValue() {
      this.listCurrentTimer.length = 0;
      this.currentTimerSubject.next({ currentTimerValue: this.listCurrentTimer });
    }

    getCurrentTimerValue() {
        return this.currentTimerSubject.asObservable();
    }
}