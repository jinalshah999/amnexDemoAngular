import { Component, OnInit } from "@angular/core";
import { Products } from "./products";

@Component({
  selector: "app-test1",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  canAddProduct: boolean = false;
  flag: string = "title";
  orderDir: boolean = false;
  color1: string = "";
  color2: string = "";
  color3: string = "";
  color4: string = "";
  ColorList: string[] = [];

  ProductList: Products[] = [
    new Products(
      101,
      "Watch",
      5000,
      "Fastrack",
      new Date(2019, 11, 17),
      "Brown, Black",
      true
    ),
    new Products(
      102,
      "Jeans",
      7000,
      "Wrangler",
      new Date(2019, 12, 24),
      "Blue, Black",
      true
    ),
    new Products(
      103,
      "T-Shirt",
      2000,
      "Bewakoof",
      new Date(2019, 6, 30),
      "White, Brown",
      true
    ),
    new Products(
      104,
      "Shirt",
      3000,
      "Bewakoof",
      new Date(2019, 10, 19),
      "Blue",
      true
    ),
    new Products(
      105,
      "Shoes",
      9000,
      "Puma",
      new Date(2019, 4, 24),
      "White",
      true
    ),
    new Products(
      106,
      "Wallet",
      1000,
      "Charm",
      new Date(2019, 5, 15),
      "Black, Brown",
      false
    ),
    new Products(
      107,
      "Belt",
      50000,
      "Charm",
      new Date(2019, 8, 30),
      "Black",
      false
    ),
    new Products(
      106,
      "Socks",
      500,
      "Puma",
      new Date(2019, 6, 29),
      "White",
      false
    )
  ];

  setSortColumnAndOrder(columnName: string) {
    this.flag = columnName;
    this.orderDir = !this.orderDir;
  }

  CanAddNewProduct() {
    this.canAddProduct = !this.canAddProduct;
  }

  setColor(state, value) {
    if (state === true) {
      this.ColorList.push(value);
    } else {
      this.ColorList.splice(this.ColorList.indexOf(value), 1);
    }
  }
  AddProduct(
    productId: string,
    productTitle: string,
    productMfg: string,
    productMfgDate: string,
    productPrice: string,
    productAvailable: boolean,
    productNotAvailable: boolean
  ) {
    let isAvailable: boolean = false;
    let productColor: string = "";

    productColor = this.ColorList.join(", ");

    if (productNotAvailable === true) {
      isAvailable = true;
    }
    if (productAvailable === true) {
      isAvailable = true;
    }
    let newProduct: Products;
    newProduct = new Products(
      parseInt(productId),
      productTitle,
      parseInt(productPrice),
      productMfg,
      new Date(productMfgDate),
      productColor,
      isAvailable
    );
    this.ProductList = this.ProductList.concat(newProduct);
  }

  RemoveProduct(product: Products) {
    if (confirm("Are you sure you want to Delete?")) {
      this.ProductList.splice(this.ProductList.indexOf(product), 1);
      this.ProductList = this.ProductList.concat();
    }
  }

  UpdateProduct(product: Products) {
    product.Product_Available = !product.Product_Available;
  }

  constructor() {}

  ngOnInit() {}
}
