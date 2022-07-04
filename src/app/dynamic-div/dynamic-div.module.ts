import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';



@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicDivComponent
  ]
})
export class DynamicDivModule { }
