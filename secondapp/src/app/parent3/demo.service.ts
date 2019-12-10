import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
count:number=1;
  constructor() {
    console.log('I am from demo service');
   }
  getCount():number{
    return this.count;
  }
  incCounter():number{
   return  ++this.count;
  }
}
