import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  endpoints  } from "../../environments/environment";
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  url:string=endpoints.url+"products/";

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.url);
  }
  addProduct(obj:Products){
      const body=JSON.stringify(obj);
      const head=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url,body,{headers:head});
  }
}
