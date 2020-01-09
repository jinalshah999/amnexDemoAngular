import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId;



  constructor(private productService: ProductService) { }

 products$=this.productService.products$;

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
