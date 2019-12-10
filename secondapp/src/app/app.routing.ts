import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TasksComponent } from './tasks/tasks.component';
import { ParentoneComponent } from './parentone/parentone.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpAddComponent } from './emp-list/emp-add/emp-add.component';

const arr:Routes=[
  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'tasks',component:TasksComponent},
  {path:'parentone',component:ParentoneComponent},
  {path:'user',component:UserComponent},
  {path:'userdisplay',component:UserDisplayComponent},
  {path:'userdetails/:user_name',component:UserdetailsComponent},
  {path:'emp',component:EmpListComponent},
  {path:'empAdd',component:EmpAddComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];
export const routingarr=RouterModule.forRoot(arr);
