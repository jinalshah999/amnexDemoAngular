import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from "./product-display/product-display.component";
import { AddProductComponent } from "./product-display/add-product/add-product.component";
import { EditProductComponent } from "./product-display/edit-product/edit-product.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
