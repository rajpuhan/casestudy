import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data/student-data.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentRoutingModule } from './student-routing.module';


@NgModule({
  declarations: [
    StudentDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentRoutingModule
  ],
  exports: [
    StudentDataComponent
  ]
})
export class StudentModule { }
