import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {
  Observable,
  throwError,
  combineLatest,
  Subject,
  merge,
  BehaviorSubject,
  of,
  from,
  EMPTY
} from "rxjs";
import {
  catchError,
  tap,
  map,
  scan,
  shareReplay,
  filter,
  switchMap,
  mergeMap,
  toArray
} from "rxjs/operators";

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

  // All products
  products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap(data => console.log("products ", JSON.stringify(data))),
    catchError(this.handleError)
  );

  // Combine products with categories
  // Map to the revised shape.
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
            category: category.find(x => x.id === products.categoryId).name
          } as Product)
      );
    }),
    tap(data => console.log("productswithcategories ", JSON.stringify(data))),
    catchError(this.handleError)
  );

  /*
    Allows adding of products to the Observable
  */

  //Action Stream

  private productInsertedSubject = new Subject<Product>();
  productInsertedAction$ = this.productInsertedSubject.asObservable();

  productsWithAdd$ = merge(
    this.productswithcategories$,
    this.productInsertedAction$
  ).pipe(
    scan((acc: Product[], value: Product) => [...acc, value]),
    tap(data => console.log("products with add", JSON.stringify(data))),
    catchError(err => {
      return throwError(err);
    })
  );

  addProduct(newProduct?: Product) {
    newProduct = newProduct || this.fakeProduct();
    this.productInsertedSubject.next(newProduct);
  }

  // Action stream for product selection
  // Default to 0 for no product
  // Must have a default so the stream emits at least once.

  private productSelectedSubject = new BehaviorSubject<number>(0);
  productSelectedAction$ = this.productSelectedSubject.asObservable();

  // Currently selected product
  // Used in both List and Detail pages,
  // so use the shareReply to share it with any component that uses it

  selectedProduct$ = combineLatest([
    this.productswithcategories$,
    this.productSelectedAction$
  ]).pipe(
    map(([products, selectedProductId]) => {
      return products.find(product => product.id === selectedProductId);
    }),
    tap(data => console.log("selected Product ", JSON.stringify(data))),
    shareReplay(1),
    catchError(this.handleError)
  );

  //change the selectedProduct
  selectedProductChanged(productId: number) {
    this.productSelectedSubject.next(productId);
  }

  // Suppliers for the selected product
  // Finds suppliers from download of all suppliers
  // Add a catchError so that the display appears
  // even if the suppliers cannot be retrieved.
  // Note that it must return an empty array and not EMPTY
  // or the stream will complete.
  selectedProductSuppliers$ = combineLatest([
    this.selectedProduct$,
    this.supplierService.suppliers$.pipe(
      catchError(err => of([] as Supplier[]))
    )
  ]).pipe(
    map(([selectedProduct, suppliers]) =>
      suppliers.filter(supplier =>
        selectedProduct
          ? selectedProduct.supplierIds.includes(supplier.id)
          : EMPTY
      )
    )
  );


   // Suppliers for the selected product
  // Only gets the suppliers it needs
  selectedProductSuppliers2$ = this.selectedProduct$.pipe(
    filter(selectedProduct => Boolean(selectedProduct)),
    switchMap(selectedProduct =>
      from(selectedProduct.supplierIds).pipe(
        mergeMap(supplierId =>
          this.http.get<Supplier>(`${this.suppliersUrl}/${supplierId}`)
        ),
        toArray(),
        tap(suppliers =>
          console.log("product suppliers", JSON.stringify(suppliers))
        )
      )
    )
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
