import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filterProduct',
  pure:false
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], args: string): Product[] {
    return value.filter((x)=>x.pro_title.startsWith(args.toLowerCase()));
  }

}
