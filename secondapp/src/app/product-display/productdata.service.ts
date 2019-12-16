import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  endpoints  } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  url:string=endpoints.url+"products/";

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.url);
  }
}
