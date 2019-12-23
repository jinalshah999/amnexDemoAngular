import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDisplayComponent } from "./user-display/user-display.component";
import { AddUserComponent } from "./user-display/add-user/add-user.component";
import { EditUserComponent } from "./user-display/edit-user/edit-user.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { UserguardService } from './userguard.service';

const arr: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "users",canActivate:[UserguardService] ,
    component: ShellComponent,
    children: [
      { path: "", component: UserDisplayComponent },
      { path: "useradd", component: AddUserComponent },
      { path: "useredit/:user_email", component: EditUserComponent }
    ]
  },
  {
    path: "home",canActivate:[UserguardService],
    component: ShellComponent,
    children: [{ path: "", component: HomeComponent }]
  },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" }
];

export const routingarr = RouterModule.forRoot(arr);
