import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from './product-display.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { productRoutes } from './product.routing';

@NgModule({
  declarations:[
    ProductDisplayComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports:[
    CommonModule,
    productRoutes
  ]
})

export class ProductModule{}
