import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data/student-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StudentDataComponent
  ]
})
export class StudentModule { }
