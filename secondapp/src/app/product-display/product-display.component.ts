import { Component, OnInit } from '@angular/core';
import { ProductdataService } from './productdata.service';
import { Products } from './products';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  product:Products[]=[];
  constructor(private _productData:ProductdataService) { }

  ngOnInit() {
      this._productData.getAllProducts().subscribe(
        (x:Products[])=>{
            this.product=x;
            console.log(this.product);
        },
        function(error){
          console.log(error);
        },
        function(){

        }
      );

  }

}
