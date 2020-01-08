import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { Product } from "./product";
import { throwError } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  url: string = environment.url + "product/";
  constructor(private _http: HttpClient) {}
  products$ = this._http
    .get<Product[]>(this.url)
    .pipe( catchError(this.handleError));

  private handleError(ex: HttpErrorResponse) {
    let errorMessage: string = "";
    if (ex.error instanceof ErrorEvent) {
      console.log("client side error", ex.message);
      errorMessage = ex.message;
    } else {
      console.log("server side error", ex.message);
      errorMessage = ex.message;
    }
    return throwError(errorMessage);
  }
}
