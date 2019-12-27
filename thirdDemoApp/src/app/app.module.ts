import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { routingarr } from "./app.routing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";


import { ProductModule } from "./product-display/product.module";
import { HttpinterceptorsService } from './httpinterceptors.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    routingarr,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

    {provide:HTTP_INTERCEPTORS,useClass:HttpinterceptorsService,multi:true}
     ],
  bootstrap: [AppComponent]
})
export class AppModule {}
