import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { routingarr } from "./app.routing";
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { AddUserComponent } from './user-display/add-user/add-user.component';
import { EditUserComponent } from './user-display/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    AddUserComponent,
    EditUserComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    routingarr,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
