import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "./productdata.service";
import { Products } from "./products";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"]
})
export class ProductDisplayComponent implements OnInit {
  product: Products[] = [];
  constructor(private _productData: ProductdataService) {}

  onProductDelete(item) {
    this._productData.deleteProduct(item).subscribe((x: any) => {
      this.product.splice(this.product.indexOf(item), 1);
    });
  }
  ngOnInit() {
    this._productData.getAllProducts().subscribe(
      (x: Products[]) => {
        this.product = x;
        console.log(this.product);
      },
      function(error) {
        console.log(error);
      },
      function() {}
    );
  }
}
