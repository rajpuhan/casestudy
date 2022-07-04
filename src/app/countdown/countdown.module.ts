import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownMainComponent } from './countdown-main/countdown-main.component';
import { TimerComponent } from './timer/timer.component';
import { TimerActionComponent } from './timer-action/timer-action.component';
import { TimerDetailsComponent } from './timer-details/timer-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountdownMainComponent,
    TimerComponent,
    TimerActionComponent,
    TimerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountdownMainComponent
  ]
})
export class CountdownModule { }
