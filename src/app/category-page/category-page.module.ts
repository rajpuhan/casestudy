import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormsModule } from '@angular/forms';
import { CategoryPageRoutingModule } from './category-page-routing.module';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoryPageRoutingModule
  ],
  exports: [
    CategoryPageComponent
  ]
})
export class CategoryPageModule { }
