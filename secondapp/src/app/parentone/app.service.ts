import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  arr:Todo[]=[
    new Todo('1','Email to your manager'),
    new Todo('2','push code to github')
  ];
  getAllTodos():Todo[]{
    return this.arr;
  }
  addTodo(obj:Todo):void{
    this.arr.push(obj);
  }
  deleteTodo(obj:Todo):void{
    this.arr.splice(this.arr.indexOf(obj),1);
  }
    count:number=1;
  constructor() {
    console.log('from service');
   }
  getCount():number{
    return this.count;
  }
  incCount(){
   return  this.count++;
  }
}
