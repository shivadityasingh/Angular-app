import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectBehaviorComponent } from './subject-behavior/subject-behavior.component';

const routes: Routes = [
  {path : 'users', component: UserComponent},
  {path : 'about', component : AboutComponent},
  {path : 'api', component: ApiComponent},
  {path : 'task', component: TaskComponent},
  {path : 'form', component: FormComponent},
  {path : 'observables', component: ObservablesComponent},
  {path : 'subjectbehavior', component : SubjectBehaviorComponent},
  {path : '', redirectTo:'/users', pathMatch: 'full'},
  {path : '**', redirectTo:'/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
