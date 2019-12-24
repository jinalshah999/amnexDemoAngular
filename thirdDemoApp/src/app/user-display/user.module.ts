import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UserDisplayComponent } from './user-display.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { userRoutes } from './user.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations:[
    UserDisplayComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports:[
    CommonModule,
    userRoutes,
    ReactiveFormsModule
  ]

})

export class UserModule{}
