import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cat:string='watch';
  pro_obj:Product=new Product(0,'','','',false);
  product_arr:Product[]=[
    new Product(101,'xyz','adfasdfasdf','abc',true),
    new Product(101,'mno','adfas','abc',false)
  ];
  constructor() { }
  onCatChange(){
    this.cat="T-shirts";
  }
  onMyEvent(val)
  {
    this.product_arr=this.product_arr.filter((x)=>x.pro_title.indexOf(val)!=-1);
  }
  onProductAdd(){

    this.product_arr.push(this.pro_obj);
  }
  onProductDelete(item:Product){

    this.product_arr.splice(this.product_arr.indexOf(item),1);
    //this.product_arr=this.product_arr.concat();
  }
  ngOnInit() {
  }

}
