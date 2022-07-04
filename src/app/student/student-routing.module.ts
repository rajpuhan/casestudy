import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';  
import { StudentDataComponent } from './student-data/student-data.component';
const routes: Routes = [  
 { path: '', component: StudentDataComponent}
];  
 @NgModule({  
    imports: [RouterModule.forChild(routes)],  
    exports: [RouterModule]  
})  
export class StudentRoutingModule { }