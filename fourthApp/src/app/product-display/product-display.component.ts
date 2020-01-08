import { Component } from "@angular/core";
import { ProductDataService } from "./product-data.service";



@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"]
})
export class ProductDisplayComponent  {
  errorMessage = "";
  constructor(private _productdata: ProductDataService) {}

  products$=this._productdata.products$;
}
