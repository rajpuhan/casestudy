import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryPageModule } from './category-page/category-page.module';
import { CountdownModule } from './countdown/countdown.module';
import { DynamicDivModule } from './dynamic-div/dynamic-div.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    CategoryPageModule,
    StudentModule,
    DynamicDivModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
