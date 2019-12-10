import { Pipe, PipeTransform } from '@angular/core';
import { Products } from "./products";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Products[], args: string = 'title', orderDir: boolean = false): Products[] {
    console.log(args, orderDir);
    if (args === 'title') {
      if (orderDir === false) {
        return value.sort((a, b) => {
          const x = a.Product_Title.toLowerCase();
          const y = b.Product_Title.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });
      } else {
        return value.sort((a, b) => {
          const x = a.Product_Title.toLowerCase();
          const y = b.Product_Title.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        }).reverse();
      }
    } else {
      if (orderDir === false) {
        return value.sort((a, b) => {
          return a.Product_Price - b.Product_Price;
        });
      } else {
        return value.sort((a, b) => {
          return b.Product_Price - a.Product_Price;
        });
      }
    }

  }

}
