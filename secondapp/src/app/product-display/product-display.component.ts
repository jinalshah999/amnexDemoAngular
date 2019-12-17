import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "./productdata.service";
import { Products } from "./products";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"]
})
export class ProductDisplayComponent implements OnInit {
  product: Products[] = [];
  constructor(
    private _productData: ProductdataService,
    private _router: Router
  ) {}
  onProductEdit(item: Products) {
    this._router.navigate(["/productedit", item.pro_id]);
  }

  onProductDelete(item: Products) {
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
