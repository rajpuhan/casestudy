import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerActionComponent } from './timer-action/timer-action.component';
import { TimerDetailsComponent } from './timer-details/timer-details.component';
import { FormsModule } from '@angular/forms';
import { CountdownMainComponent } from './countdown-main/countdown-main.component';
import { CountdownSubjectRoutingModule } from './countdown-subject-routing.module';



@NgModule({
  declarations: [
    CountdownMainComponent,
    TimerComponent,
    TimerActionComponent,
    TimerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountdownSubjectRoutingModule
  ]
})
export class CountdownSubjectModule { }
