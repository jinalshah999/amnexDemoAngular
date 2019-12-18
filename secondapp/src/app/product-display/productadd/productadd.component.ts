import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductdataService } from "../productdata.service";
import { Router } from "@angular/router";
import { Products } from '../products';

@Component({
  selector: "app-productadd",
  templateUrl: "./productadd.component.html",
  styleUrls: ["./productadd.component.css"]
})
export class ProductaddComponent implements OnInit {
  productForm: FormGroup;
  blankObj:Products=new Products(0,'',0,'',0,'','');
  constructor(private prodata: ProductdataService, private _router: Router) {}

  ngOnInit() {
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
  onProductAdd() {
    this.prodata.addProduct(this.productForm.value).subscribe((x: any) => {
      console.log(x);
      alert("added");
      this.clearForm();
      //this._router.navigate(["/products"]);
    });
  }
  clearForm(){
    this.productForm.patchValue(this.blankObj);
  }
}
