import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
product;
productSuppliers;
  private errorMessageSubject=new Subject<string>();
  errorMessageAction$=this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }

  selectProduct$=this.productService.selectedProduct$.pipe(
    catchError(err=>{
      this.errorMessageSubject.next(err);
      return  EMPTY;
    })
  );

  selectedProductSuppliers$=this.productService.selectedProductSuppliers2$.pipe(
    catchError(err=>{
      this.errorMessageSubject.next(err);
      return  EMPTY;
    })
  );

}
