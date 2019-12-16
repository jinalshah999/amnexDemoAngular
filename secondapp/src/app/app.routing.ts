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
import { EmpEditComponent } from './emp-list/emp-edit/emp-edit.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

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
  {path:'empEdit/:emp_id',component:EmpEditComponent},
  {path:'signup',component:SignupComponent},
  {path:'usersignup',component:UserSignupComponent},
  {path:'products',component:ProductDisplayComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];
export const routingarr=RouterModule.forRoot(arr);
