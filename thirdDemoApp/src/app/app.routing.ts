import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";
import { UserguardService } from './userguard.service';

const arr: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "todo", canLoad:[UserguardService],  loadChildren: "./todo-display/todo.module#TodoModule" },
  { path: "users",canActivate:[UserguardService], loadChildren: "./user-display/user.module#UserModule" },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" }
];

export const routingarr = RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
