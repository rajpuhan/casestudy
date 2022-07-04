import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';  
import { CountdownMainComponent} from './countdown-main/countdown-main.component';  
const routes: Routes = [  
 { path: '', component: CountdownMainComponent }  
];  
 @NgModule({  
    imports: [RouterModule.forChild(routes)],  
    exports: [RouterModule]  
})  
export class CountdownRoutingModule { }