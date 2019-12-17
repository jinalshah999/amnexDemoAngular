import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { routingarr } from "./app.routing";

import { AppComponent } from './app.component';
import { ChildoneComponent } from './parentone/childone/childone.component';
import { ChildtwoComponent } from './parentone/childtwo/childtwo.component';
import { ParentoneComponent } from './parentone/parentone.component';
import { Parent2Component } from './parent2/parent2.component';
import { ChildonesolComponent } from './parent2/childonesol/childonesol.component';
import { ChildtwosolComponent } from './parent2/childtwosol/childtwosol.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTasksComponent } from './tasks/add-tasks/add-tasks.component';
import { Parent3Component } from './parent3/parent3.component';
import { C1Component } from './parent3/c1/c1.component';
import { C2Component } from './parent3/c2/c2.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpAddComponent } from './emp-list/emp-add/emp-add.component';
import { EmpEditComponent } from './emp-list/emp-edit/emp-edit.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductaddComponent } from './product-display/productadd/productadd.component';
import { ProductEditComponent } from './product-display/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ParentoneComponent,
    Parent2Component,
    ChildonesolComponent,
    ChildtwosolComponent,
    TasksComponent,
    AddTasksComponent,
    Parent3Component,
    C1Component,
    C2Component,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    UserComponent,
    UserDisplayComponent,
    UserdetailsComponent,
    EmpListComponent,
    EmpAddComponent,
    EmpEditComponent,
    SignupComponent,
    UserSignupComponent,
    ProductDisplayComponent,
    ProductaddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routingarr,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
