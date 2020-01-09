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

  private errorMessageSubject=new Subject<string>();
  errorMessageAction$=this.errorMessageSubject.asObservable();

   constructor(
    private productService: ProductService,
    private prodcutcategoryService: ProductCategoryService
  ) {}
  products$ = this.productService.productswithcategories$.pipe(
    catchError(error => {
     this.errorMessageSubject.next("something went wrong");
      return EMPTY;
    })
  );

  categories$ = this.prodcutcategoryService.categories$.pipe(
    catchError(error => {
    this.errorMessageSubject.next(error);
      return EMPTY;
    })
  );

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  prodcutswithactionStream$=combineLatest([
    this.products$,
    this.categorySelectedAction$
  ]).pipe(
    map(([products, categoryId]) => {
      return products.filter(x =>
        categoryId ? x.categoryId === categoryId : true
      );
    }),
  );

  onAdd(): void {
    console.log("Not yet implemented");
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
   // console.log(this.selectedCategroyId);
  }
}
