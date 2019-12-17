import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductdataService } from "../productdata.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Products } from "../products";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  pro_id: number;
  productForm: FormGroup;
  constructor(
    private _acrouter: ActivatedRoute,
    private _router: Router,
    private _productdata: ProductdataService
  ) {}

  ngOnInit() {
    this.pro_id = this._acrouter.snapshot.params["pro_id"];
    this._productdata
      .getProductById(this.pro_id)
      .subscribe(x => this.onEdit(x[0]));
    this.productForm = new FormGroup({
      pro_id: new FormControl(null, Validators.required),
      pro_name: new FormControl(null),
      pro_price: new FormControl(null),
      pro_desc: new FormControl(null),
      pro_qty: new FormControl(null),
      pro_mfg: new FormControl(null),
      pro_img: new FormControl(null)
    });
  }
  onEdit(selectedProduct: Products) {
    this.productForm.patchValue({
      pro_id: selectedProduct.pro_id,
      pro_name: selectedProduct.pro_name,
      pro_price: selectedProduct.pro_price,
      pro_desc: selectedProduct.pro_desc,
      pro_qty: selectedProduct.pro_qty,
      pro_mfg: selectedProduct.pro_mfg,
      pro_img: selectedProduct.pro_img
    });
  }
  onProductEdit() {
    this._productdata.editProduct(this.productForm.value).subscribe(
      (x)=>{
        this._router.navigate(['/products']);
      }
    );
  }

  //ngOnInit() {

  //  this._acrouter.params.subscribe(
  //    (x)=>{
  //     this.pro_id=x.pro_id;
  //    }
  //  );
  //}
}
