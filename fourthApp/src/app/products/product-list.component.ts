import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ProductService } from "./product.service";
import { catchError, map, startWith } from "rxjs/operators";
import { EMPTY, Subject, combineLatest, of, BehaviorSubject } from "rxjs";
import { ProductCategoryService } from "../product-categories/product-category.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = "Product List";

  //Error handling
  private errorMessageSubject = new Subject<string>();
  errorMessageAction$ = this.errorMessageSubject.asObservable();

  constructor(
    private productService: ProductService,
    private prodcutcategoryService: ProductCategoryService
  ) {}



  //get all categories for dropdown filter
  categories$ = this.prodcutcategoryService.categories$.pipe(
    catchError(error => {
      this.errorMessageSubject.next(error);
      return EMPTY;
    })
  );

  //action stream for selected category
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  //emit the selected category to observable
  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId); //use + to convert to number
  }

  productswithadd$=combineLatest([
    this.productService.productsWithAdd$,
    this.categorySelectedAction$
  ]).pipe(
    map(([products, categoryId]) => {
      return products.filter(x =>
        categoryId ? x.categoryId === categoryId : true
      );
    })
  );

  //adding new record to the collection
  onAdd(): void {
   this.productService.addProduct();
  }


}


//fetch all products with categories
// products$ = this.productService.productswithcategories$.pipe(
//   catchError(error => {
//     this.errorMessageSubject.next("something went wrong");
//     return EMPTY;
//   })
// );

//merge action stream with data stream i.e. with products$

// prodcutswithactionStream$ = combineLatest([
//   this.products$,
//   this.categorySelectedAction$
// ]).pipe(
//   map(([products, categoryId]) => {
//     return products.filter(x =>
//       categoryId ? x.categoryId === categoryId : true
//     );
//   })
// );
