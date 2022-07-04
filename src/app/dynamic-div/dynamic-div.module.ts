import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { DynamicDivRoutingModule } from './dynamic-div-routing.module';



@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    DynamicDivRoutingModule
  ],
  exports: [
    DynamicDivComponent
  ]
})
export class DynamicDivModule { }
