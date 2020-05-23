import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseListSearchComponent } from './choose-list-search/choose-list-search.component'
import { JobListComponent } from './job-list/job-list.component'
import {LoginComponent } from './login/login.component'
import { DisplayDetailsComponent } from './display-details/display-details.component'

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'jobList',component:JobListComponent},
{path: 'details',component:DisplayDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[ChooseListSearchComponent];
