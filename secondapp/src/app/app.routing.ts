import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TasksComponent } from './tasks/tasks.component';
import { ParentoneComponent } from './parentone/parentone.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const arr:Routes=[
  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'tasks',component:TasksComponent},
  {path:'parentone',component:ParentoneComponent},
  {path:'user',component:UserComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];
export const routingarr=RouterModule.forRoot(arr);
