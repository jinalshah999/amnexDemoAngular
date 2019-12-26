import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";
import { UserguardService } from "./userguard.service";

const arr: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "todo",
    canLoad: [UserguardService],
    loadChildren: () =>
      import("./todo-display/todo.module").then(m => m.TodoModule)
  },
  {
    path: "users",
    canActivate: [UserguardService],
    loadChildren: () =>
      import("./user-display/user.module").then(x => x.UserModule)
  },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" }
];

export const routingarr = RouterModule.forRoot(arr, {
  preloadingStrategy: PreloadAllModules
});
