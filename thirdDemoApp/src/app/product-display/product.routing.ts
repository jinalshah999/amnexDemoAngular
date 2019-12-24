import { Routes, RouterModule } from "@angular/router";
import { ProductDisplayComponent } from "./product-display.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const arr: Routes = [
  {
    path: "products",
    children: [
      { path: "", component: ProductDisplayComponent },
      { path: "add", component: AddProductComponent },
      { path: "edit/:pro_id", component: EditProductComponent }
    ]
  }
];

export const productRoutes = RouterModule.forChild(arr);
