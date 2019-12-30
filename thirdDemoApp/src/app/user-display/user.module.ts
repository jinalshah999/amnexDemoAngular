import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDisplayComponent } from './user-display.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { userRoutes } from './user.routing';

@NgModule({

  declarations:[
    UserDisplayComponent,
    AddUserComponent,
    EditUserComponent,
    UserSignupComponent
  ],
  imports:[
    CommonModule,
    userRoutes,
    ReactiveFormsModule
  ]

})

export class UserModule{}
