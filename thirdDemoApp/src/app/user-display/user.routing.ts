import { Routes, RouterModule } from "@angular/router";
import { UserDisplayComponent } from "./user-display.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { UsereditguardService } from "./usereditguard.service";

const arr: Routes = [
  {
    path: "",
    children: [
      { path: "", component: UserDisplayComponent },
      { path: "add", component: AddUserComponent },
      {
        path: "edit/:user_email",
        canDeactivate: [UsereditguardService],
        component: EditUserComponent
      }
    ]
  }
];

export const userRoutes = RouterModule.forChild(arr);
