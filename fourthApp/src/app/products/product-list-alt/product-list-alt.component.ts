import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  selectedProductId;

private errorMessageSubject=new Subject<string>();
errorMessageAction$=this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }

 products$=this.productService.productswithcategories$.pipe(
   catchError(err=>{
    this.errorMessageSubject.next(err);
     return EMPTY;
   })
 );

  onSelected(productId: number): void {
    //console.log('Not yet implemented');
    this.productService.selectedProductChanged(productId);
  }
}
