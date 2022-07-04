import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CategoryPageComponent
  ]
})
export class CategoryPageModule { }
