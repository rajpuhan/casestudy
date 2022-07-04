import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'route2',  
    loadChildren: () => import('./category-page/category-page.module')  
    .then(m => m.CategoryPageModule)  
 },
  {  
    path: 'route3',  
    loadChildren: () => import('./countdown/countdown.module')  
    .then(m => m.CountdownModule)  
 },
 {  
  path: 'route4',  
  loadChildren: () => import('./countdown-subject/countdown-subject.module')  
  .then(m => m.CountdownSubjectModule)  
},
  {  
    path: 'route5',  
    loadChildren: () => import('./student/student.module')  
    .then(m => m.StudentModule)  
 },
  {  
    path: 'route6',  
    loadChildren: () => import('./dynamic-div/dynamic-div.module')  
    .then(m => m.DynamicDivModule)  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
