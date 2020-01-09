import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError, combineLatest } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Product } from "./product";
import { Supplier } from "../suppliers/supplier";
import { SupplierService } from "../suppliers/supplier.service";
import { ProductCategoryService } from "../product-categories/product-category.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productsUrl = "api/products";
  private suppliersUrl = this.supplierService.suppliersUrl;

  constructor(
    private http: HttpClient,
    private productcategoryService: ProductCategoryService,
    private supplierService: SupplierService
  ) {}
  products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap(data => console.log("products ", JSON.stringify(data))),
    catchError(this.handleError)
  );

  productswithcategories$ = combineLatest([
    this.products$,
    this.productcategoryService.categories$
  ]).pipe(
    map(([products, category]) => {
      return products.map(
        products =>
          ({
            ...products,
            price: products.price * 1.5,
           category:category.find(x=>x.id===products.categoryId).name
          } as Product)
      );
    }),
    tap(data => console.log("productswithcategories ", JSON.stringify(data))),
    catchError(this.handleError)
  );

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private fakeProduct() {
    return {
      id: 42,
      productName: "Another One",
      productCode: "TBX-0042",
      description: "Our new product",
      price: 8.9,
      categoryId: 3,
      category: "Toolbox",
      quantityInStock: 30
    };
  }
}